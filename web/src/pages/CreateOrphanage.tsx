import React, { ChangeEvent, FormEvent, useState, useContext } from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from "leaflet";
import { useHistory } from "react-router-dom";
import { ThemeContext } from 'styled-components'

import { FiPlus } from "react-icons/fi";

import {Container} from '../styles/pages/create-orphanage'
import Sidebar from "../components/Sidebar";
import mapIcon from "../utils/mapIcon";
import api from "../services/api";

export default function CreateOrphanage() {
  const { title } = useContext(ThemeContext)
  const history = useHistory()

  const [position, setPosition] = useState({latitude: 0, longitude: 0})

  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [opening_hours, setOpeningHours] = useState('')
  const [open_on_weekends, setOpenOnWeekends] = useState(true)
  const [images, setImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])
  const [whatsapp, setWhatsapp] = useState('')
  const [facebook, setFacebook] = useState('')
  const [website, setWebsite] = useState('')

  function handleMapClick(event: LeafletMouseEvent){
    const { lat, lng } = event.latlng
    setPosition({
      latitude: lat,
      longitude: lng
    })
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if(!event.target.files) return 

    const selectedImages = Array.from(event.target.files)

    setImages(selectedImages)

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image)
    })

    setPreviewImages(selectedImagesPreview)
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const {latitude, longitude} = position

    const data = new FormData()

    data.append('name', name)
    data.append('about', about)
    data.append('latitude', String(latitude))
    data.append('longitude', String(longitude))
    data.append('instructions', instructions)
    data.append('opening_hours', opening_hours)
    data.append('open_on_weekends', String(open_on_weekends))
    data.append('whatsapp', whatsapp)
    data.append('facebook', facebook)
    data.append('website', website)
    
    images.forEach(image => {
      data.append('images', image)
    })

    await api.post('orphanages', data)

    alert('Cadastro realizado com sucesso!')

    history.push('/app')
  }

  return (
    <Container>
      <div id="page-create-orphanage">
        <Sidebar />

        <main>
          <form onSubmit={handleSubmit} className="create-orphanage-form">
            <fieldset>
              <legend>Dados</legend>

              <Map 
                center={[-23.3915386,-46.593389]} 
                style={{ width: '100%', height: 280 }}
                zoom={15}
                onClick={handleMapClick}
              >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                { 
                  title === 'light'
                  ? (
                    <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
                    )
                  : (
                    <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
                  )
                }

                { 
                  position.latitude !== 0 && position.longitude !== 0 && (
                    <Marker 
                      interactive={false} 
                      icon={mapIcon} 
                      position={[position.latitude, position.longitude]} 
                    />
                  )
                }

              </Map>

              <div className="input-block">
                <label htmlFor="name">Nome*</label>
                <input 
                  id="name" 
                  value={name} 
                  onChange={event => setName(event.target.value)} 
                  required
                />
              </div>

              <div className="input-block">
                <label htmlFor="about">Sobre* <span>Máximo de 300 caracteres</span></label>
                <textarea 
                  id="about" 
                  maxLength={300} 
                  value={about} 
                  onChange={event => setAbout(event.target.value)}
                  required
                />
              </div>

              <div className="input-block">
                <label htmlFor="images">Fotos*</label>

                <div className="images-container">
                  {previewImages.map(image => {
                    return (
                      <img key={image} src={image} alt={name}/>
                    )
                  })}

                  <label htmlFor="image[]" className="new-image">
                    <FiPlus size={24} color="#15b6d6" />
                  </label>
                </div>

                <input 
                  multiple 
                  type="file" 
                  id="image[]"
                  onChange={handleSelectImages}
                />
              </div>
            </fieldset>

            <fieldset>
              <legend>Visitação</legend>

              <div className="input-block">
                <label htmlFor="instructions">Instruções*</label>
                <textarea 
                  id="instructions" 
                  value={instructions} 
                  onChange={event => setInstructions(event.target.value)}
                  required
                />
              </div>

              <div className="input-block">
                <label htmlFor="opening_hours">Horário de funcionamento*</label>
                <input 
                  id="opening_hours" 
                  value={opening_hours} 
                  onChange={event => setOpeningHours(event.target.value)}
                  required
                />
              </div>

              <div className="input-block">
                <label htmlFor="open_on_weekends">Atende fim de semana*</label>

                <div className="button-select">
                  <button 
                    type="button" 
                    className={open_on_weekends ? 'active' : ''}
                    onClick={() => setOpenOnWeekends(true)}
                  >
                    Sim
                  </button>
                  <button 
                    type="button"
                    className={!open_on_weekends ? 'active' : ''}
                    onClick={() => setOpenOnWeekends(false)}
                  >
                    Não
                  </button>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Contatos</legend>

              <div className="input-block">
                <label htmlFor="whatsapp">Whatsapp*</label>
                <input 
                  id="whatsapp" 
                  value={whatsapp} 
                  onChange={event => setWhatsapp(event.target.value)}
                  required
                />
              </div>

              <div className="input-block">
                <label htmlFor="facebook">Facebook</label>
                <input 
                  id="facebook" 
                  value={facebook} 
                  onChange={event => setFacebook(event.target.value)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="website">Site do orfanato</label>
                <input 
                  id="website" 
                  value={website} 
                  onChange={event => setWebsite(event.target.value)}
                />
              </div>
            </fieldset>

            <button className="confirm-button" type="submit">
              Confirmar
            </button>
          </form>
        </main>
      </div>
    </Container>
  );
}
