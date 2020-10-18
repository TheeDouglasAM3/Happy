import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import orphanageView from '../views/orphanages_view'
import Orphanage from '../models/Orphanage'
import * as Yup from 'yup'

export default {
  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage)

    const orphanages = await orphanagesRepository.find({
      relations: ['images']
    })

    return response.json(orphanageView.renderMany(orphanages))
  },

  async show(request: Request, response: Response) {
    const { id } = request.params

    const orphanagesRepository = getRepository(Orphanage)

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images']
    })

    return response.json(orphanageView.render(orphanage))
  },

  async create(request: Request, response: Response) {
    //console.log(request.files)

    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      whatsapp,
      facebook,
      website
    } = request.body
  
    const orphanagesRepository = getRepository(Orphanage)

    const requestImages = request.files as Express.Multer.File[]
    const images = requestImages.map(image => {
      return { path: image.filename }
    })

    const contact = {
      whatsapp,
      facebook,
      website
    }
  
    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      images,
      contact
    }

    console.log(data)

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required()
        })
      ),
      contact: Yup.object().shape({
        whatsapp: Yup.string().required(),
        facebook: Yup.string().notRequired(),
        website: Yup.string().notRequired()
      })
    })

    await schema.validate(data, {
      abortEarly: false
    })
  
    
    const orphanage = orphanagesRepository.create(data)
  
    await orphanagesRepository.save(orphanage)
  
    return response.status(201).json(orphanage)
  }
}