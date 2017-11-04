const clone = require('clone')
const config = require('./config')

const db = {}

const defaultData = {
  contacts: [
    {
      id: 'lab',
      name: 'Labrador',
      email: 'labrador@ca.com',
      avatarURL: '/lab.png'
    },
    {
      id: 'husky',
      name: 'Siberian Husky',
      email: 'huskies@su.com',
      avatarURL: '/husky.png'
    },
    {
      id: 'retriever',
      name: 'Golden Retriever',
      email: 'goldenretriever@uk.com',
      avatarURL: '/retriever.png'
    },
    {
      id: 'germanshepherd',
      name: 'German Shepherd',
      email: 'germanshepherd@de.com',
      avatarURL: '/germanshepherd.png'
    },
    {
      id: 'beagle',
      name: 'English Beagle',
      email: 'beagle@uk.com',
      avatarURL: '/beagle.png'
    },
  ]
}

const get = (token) => {
  let data = db[token]

  if (data == null) {
    data = db[token] = clone(defaultData)
  }

  return data
}

const add = (token, contact) => {
  if (!contact.id) {
    contact.id = Math.random().toString(36).substr(-8)
  }

  get(token).contacts.push(contact)

  return contact
}

const remove = (token, id) => {
  const data = get(token)
  const contact = data.contacts.find(c => c.id === id)

  if (contact) {
    data.contacts = data.contacts.filter(c => c !== contact)
  }

  return { contact }
}

module.exports = {
  get,
  add,
  remove
}
