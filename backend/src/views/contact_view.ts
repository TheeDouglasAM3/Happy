import Contact from '../models/Contact'

export default {
  render(contact: Contact) {
    return {
      id: contact.id,
      whatsapp: contact.whatsapp,
      facebook: contact.facebook,
      website: contact.website,
    }
  },

  renderMany(contacts: Contact[]) {
    return contacts.map(contact => this.render(contact))
  }
}