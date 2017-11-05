const clone = require('clone')
const config = require('./config')

const db = {}

const defaultData = {
  locations: [
    {
      id: 'lab',
      location: 'Canada'
    },
    {
      id: 'husky',
      location: 'Siberia'
    },
    {
      id: 'retriever',
      location: 'Scotland'
    },
    {
      id: 'germanshepherd',
      location: 'Germany'
    },
    {
      id: 'beagle',
      location: 'England'
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

const add = (token, location) => {
  get(token).locations.push(location)

  return location
}

const remove = (token, id) => {
  const data = get(token)
  const location = data.locations.find(c => c.id === id)

  if (location) {
    data.locations = data.locations.filter(c => c !== location)
  }

  return { location }
}

module.exports = {
  get,
  add,
  remove
}
