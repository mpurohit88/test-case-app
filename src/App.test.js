import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});

test('should render edit heading', () => {
  const { getByText, getByTestId } = render(<App />);
  const message = getByTestId('message');
  expect(message).toBeInTheDocument();
})

test('should render emailid textbox', () => {
  const { getByLabelText, getByPlaceholderText } = render(<App />);
  const inputBox = getByLabelText('Enter Email Id');
  expect(inputBox).toBeInTheDocument();
})