import {render, screen} from '@testing-library/react';
import App from './app';
import {FILM} from '../../constants';

test('Renders app-component', () => {
  render(<App film={FILM} />);
  const titleRegex = new RegExp(FILM.title, 'i');
  const textElement = screen.getByText(titleRegex);
  expect(textElement).toBeInTheDocument();
});
