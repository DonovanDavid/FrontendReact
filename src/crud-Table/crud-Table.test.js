import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CrudTable from './CrudTable';

describe('<CrudTable />', () => {
  test('it should mount', () => {
    render(<CrudTable />);
    
    const crudTable = screen.getByTestId('CrudTable');

    expect(crudTable).toBeInTheDocument();
  });
});