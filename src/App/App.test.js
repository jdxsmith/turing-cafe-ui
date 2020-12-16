// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App/App.js';
import '@testing-library/jest-dom';
import { reservationData } from '../apiCalls.js';
jest.mock('../apiCalls.js');

describe('App', () => {
  it('should render correctly', async () => {
    reservationData.mockResolvedValueOnce([
      {
        id: 1,
        name: "Christie",
        date: "12/29",
        time: "7:00",
        number: 12
      },
      {
        id: 2,
        name: "John",
        date: "12/2",
        time: "4:00",
        number: 7
      },
    ])
    render(
      <App/>
    )

    const allReservations = await waitFor(screen.getAllByLabelText('reservation-card'));

    allReservations.forEach(reservation => {
      expect(reservation).toBeInTheDocument()
    })
  })
})