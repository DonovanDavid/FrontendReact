import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Crud from './Crud';

describe('<Crud />', () => {
  test('it should mount', () => {
    render(<Crud />);
    
    const crud = screen.getByTestId('Crud');

    expect(crud).toBeInTheDocument();
  });
});