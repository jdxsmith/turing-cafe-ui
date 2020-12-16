import React, { Component } from 'react';
import { reservationData } from '../apiCalls.js';
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
  .then(reservations => this.setState({ reservations: reservations }))
  .catch(error => console.log(error))
}

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
