import React, { Component } from 'react';
import './Reservation-form.css'

class ReservationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  makeReservation = event => {
    event.preventDefault();
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newReservation);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', number: '' });
  }

  render() {
    return(
      <form className='reservation-form'>
        <input
          className='input-box'
          type='text'
          placeholder='Name'
          name='name'
          value={ this.state.name }
          onChange={event => this.handleChange(event)}
        />

        <input
          className='input-box'
          type='text'
          placeholder='Date'
          name='date'
          value={ this.state.date }
          onChange={event => this.handleChange(event)}
        />

        <input
          className='input-box'
          type='text'
          placeholder='Time'
          name='time'
          value={ this.state.time }
          onChange={event => this.handleChange(event)}
        />

        <input
          className='input-box'
          type='text'
          placeholder='# of Guests'
          name='number'
          value={ this.state.number }
          onChange={event => this.handleChange(event)}
        />

        <button className='make-reservation-btn' onClick={event => this.makeReservation(event)}>
          Make Reservation
        </button>
      </form>
    )
  }
}

export { ReservationForm };