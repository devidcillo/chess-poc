import { render, screen } from '@testing-library/react';
import App from './App';

test('renders routes links', () => {
  render(<App />);
  
  screen.getByRole('link', {  name: /game/i})
  screen.getByRole('link', {  name: /stats/i})
});
