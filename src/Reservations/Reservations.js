import React from 'react';
import './Reservations.css';

const Reservations = ({ reservations }) => {
  const allReservations = reservations.map(reservation => {
    return (
      <article className='reservation-card'>
        <p>{ reservation.name }</p>
        <p>{ reservation.date }</p>
        <p>{ reservation.time } pm</p>
        <p>Number of Guests: { reservation.number }</p>
        <button className='cancel-btn'>Cancel</button>
      </article>
    )
  })

  return (
    <section>
      { allReservations }
    </section>
  )
}

export { Reservations }