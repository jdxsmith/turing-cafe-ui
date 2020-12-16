import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App/App.js';
import '@testing-library/jest-dom';
import { reservationData } from '../apiCalls.js';
jest.mock('../apiCalls.js');

describe('Reservation Form', () => {
  it('should render correctly', async () => {
    render(
      <App/>
    )

    const reservationFormName = screen.getByPlaceholderText('Name');

    expect(reservationFormName).toBeInTheDocument();
  })
})