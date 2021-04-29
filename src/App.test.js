import { render, screen } from '@testing-library/react';
import App from './App';
import Widget from './components/Widget'

test('render the app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather DashBoard/i);
  expect(linkElement).toBeInTheDocument();
});

test('widget component display city name', () => {
  render(<Widget cityName = {'London'} />);
  const linkElement = screen.getByText(/London/i);
  expect(linkElement).toBeInTheDocument();
});

