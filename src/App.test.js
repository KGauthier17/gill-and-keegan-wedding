import { render, screen } from '@testing-library/react';
import App from './App';

test('renders wedding', () => {
  render(<App />);
  const weddingElement = screen.getByText(/wedding/i);
  expect(weddingElement).toBeInTheDocument();
});
