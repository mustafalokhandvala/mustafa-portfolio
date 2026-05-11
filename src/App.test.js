import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio v2026 header', () => {
  render(<App />);
  const headerElement = screen.getByText(/PORTFOLIO — v2026/i);
  expect(headerElement).toBeInTheDocument();
});
