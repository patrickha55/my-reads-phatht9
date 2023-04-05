import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders MyReads title', () => {
  render(<BrowserRouter>
    <App />
  </BrowserRouter>);

  const linkElement = screen.getByText(/MyReads/i);
  const linkElement2 = screen.getByText(/Currently Reading/i);
  const linkElement3 = screen.getByText(/Want To Read/i);
  const linkElement4 = screen.getByText(/^Read$/i);

  expect(linkElement).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
  expect(linkElement3).toBeInTheDocument();
  expect(linkElement4).toBeInTheDocument();
});
