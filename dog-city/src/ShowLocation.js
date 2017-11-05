import React, { Component } from 'react';
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