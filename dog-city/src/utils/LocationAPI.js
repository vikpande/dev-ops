const api = process.env.REACT_APP_LOCATIONS_API_URL || 'http://localhost:5002'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAll = () =>
  fetch(`${api}/locations`, { headers })
    .then(res => res.json())
    .then(data => data.locations)

export const remove = (location) =>
  fetch(`${api}/locations/${location.id}`, { method: 'DELETE', headers })
    .then(res => res.json())
    .then(data => data.location)

export const create = (body) =>
  fetch(`${api}/locations`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())