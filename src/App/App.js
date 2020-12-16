import React, { Component } from 'react';
import { reservationData } from '../apiCalls.js';
import { Reservations } from '../Reservations/Reservations.js';
import { ReservationForm } from '../ReservationForm/Reservation-form.js';
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

  addReservation = (newReservation) => {
    this.setState({ reservations: [...this.state.reservations, newReservation] });
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <ReservationForm
          // reservations={ this.state.reservations }
          addReservation={ this.addReservation }
        />
        <Reservations
          reservations={ this.state.reservations }
        />
      </div>
    )
  }
}

export default App;
