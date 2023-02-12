import { render, screen } from '@testing-library/react';
// import React from 'react';
import { MemoryRouter } from 'react-router-dom';
// import userEvent from '@testing-library/user-event';
import App from '../App';

test('Teste se a página contém as informações sobre a Pokédex', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  const heading = screen.getByRole('link', { name: /about/i });
  expect(heading).toBeInTheDocument();
});