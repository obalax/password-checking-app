import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders password checker', () => {
  render(<App />);
  const linkElement = screen.getByText(/password checker/i);
  expect(linkElement).toBeInTheDocument();
});
