import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import escapeRegExp from 'escape-string-regexp'

class ShowLocation extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    if (this.props.onCreateContact)
      this.props.onCreateContact(values)
  }

  render() {
    const { locations } = this.props

    let showingLocations
    if (locations) {
      const match = new RegExp(escapeRegExp(locations), 'i')
      showingLocations = locations.filter((location) => match.test(location.id))
    } else {
      showingLocations = "null"
    }
    return (
      <div>
        <Link className='show-location' to='/'>Show Location</Link>
        {showingLocations.id === locations.id }
      </div>
    )
  }
}

export default ShowLocation
