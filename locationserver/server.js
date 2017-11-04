const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config')
const locations = require('./locations')

const app = express()

app.use(express.static('public'))
app.use(cors())

app.get('/', (req, res) => {
  const help = `
  <pre>
    Welcome to the Address Book API!

    Use an Authorization header to work with your own data:

    fetch(url, { headers: { 'Authorization': 'whatever-you-want' }})

    The following endpoints are available:

    GET /locations
    DELETE /locations/:id
    POST /locations { id, location }
  </pre>
  `

  res.send(help)
})

app.use((req, res, next) => {
  const token = req.get('Authorization')

  if (token) {
    req.token = token
    next()
  } else {
    res.status(403).send({
      error: 'Please provide an Authorization header to identify yourself (can be whatever you want)'
    })
  }
})

app.get('/locations', (req, res) => {
  res.send(locations.get(req.token))
})

app.delete('/locations/:id', (req, res) => {
  res.send(locations.remove(req.token, req.params.id))
})

app.post('/locations', bodyParser.json(), (req, res) => {
  const { id, location } = req.body

  if (id && location) {
    res.send(locations.add(req.token, req.body))
  } else {
    res.status(403).send({
      error: 'Please provide both a user id and location'
    })
  }
})

app.listen(config.port, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', config.port)
})
