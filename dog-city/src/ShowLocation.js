import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import escapeRegExp from 'escape-string-regexp'

import * as LocationApi from './utils/LocationAPI';

class ShowLocation extends Component {
  constructor() {
    super();
    this.state = {
      locations: []
    }
  }

  componentDidMount() {
    LocationApi.getAll().then(locations => {
      this.setState({ locations });
    });
  }

  render() {
    return (
      <div>
        {this.state.locations.map(l => (
          <div key={l.id}>
            {l.id} - {l.location}
          </div>
        ))}
      </div>
    )
  }
}

export default ShowLocation