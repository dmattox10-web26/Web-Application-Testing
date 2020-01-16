import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import App from './App';

it('App loads with 0 balls', () => {
  const { container } = render(<App />)
  const ballValue = getByTestId(container, 'ballValue')
  expect(ballValue.textContent).toBe('0')
})

it('App loads with 0 Strikes', () => {
  const { container } = render(<App />)
  const strikeValue = getByTestId(container, 'strikeValue')
  expect(strikeValue.textContent).toBe('0')
})

it('Strike and Ball buttons work', () => {
  const { container } = render(<App />)
  const ballValue = getByTestId(container, 'ballValue')
  const strikeValue = getByTestId(container, 'strikeValue')
  const ballButton = getByTestId(container, 'ballButton')
  const strikeButton = getByTestId(container, 'strikeButton')
  expect(ballValue.textContent).toBe('0')
  expect(strikeValue.textContent).toBe('0')
  fireEvent.click(ballButton)
  expect(ballValue.textContent).toBe('1')
  fireEvent.click(strikeButton)
  expect(strikeValue.textContent).toBe('1')
})
