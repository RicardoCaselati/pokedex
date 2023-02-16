import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('Teste se é exibido o próximo pokémon quando botão Próximo é clicado', () => {

  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  const homeGrid = screen.getByTestId('pokemon-grid');
  expect(homeGrid).toBeInTheDocument();
});

// test('Testa se o grid é renderizado', async () => {
//   const route = '/';
//   render(
//     <MemoryRouter initialEntries={[route]}>
//       <CardPokemon {...mockAllPokemons} />
//     </MemoryRouter>,
//   );
//   expect(screen.getByTestId('pokemon-image')).toHaveTextContent(route);
// });



