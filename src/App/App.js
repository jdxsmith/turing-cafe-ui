import React, { Component } from 'react';
import { reservationData } from '../apiCalls.js';
import { Reservations } from '../Reservations/Reservations.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

componentDidMount = async () => {
  await reservationData()
  .then(currentReservations => this.setState({ reservations: currentReservations }))
  .catch(error => console.log(error))
}

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <Reservations
          reservations={ this.state.reservations }
        />
      </div>
    )
  }
}

export default App;
