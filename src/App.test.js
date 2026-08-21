import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the virtual library heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', {
    name: /loja de eletrônicos/i,
  });
  expect(headingElement).toBeInTheDocument();
});
