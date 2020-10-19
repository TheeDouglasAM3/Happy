import Image from '../models/Image'

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `${process.env.API_URL}/uploads/${image.path}`
      // url: `http://localhost:3333/uploads/${image.path}`
      // url: `http://192.168.0.10:3333/uploads/${image.path}`
    }
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image))
  }
}