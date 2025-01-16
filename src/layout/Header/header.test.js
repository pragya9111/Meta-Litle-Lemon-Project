import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';
import '@testing-library/jest-dom/extend-expect';

test('it renders the Header component correctly', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  // Check if the logo is in the document
  expect(screen.getByAltText('logo')).toBeInTheDocument();

  // Check if the links are in the document
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Menu')).toBeInTheDocument();
  expect(screen.getByText('Reservations')).toBeInTheDocument();
});
