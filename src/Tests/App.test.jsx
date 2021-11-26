import React from 'react';
import '@testing-library/jest-dom';
import renderWithRouter from './RenderWithRouter';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testa se ao adicionar um novo produto ele será listado', () => {
  const { history } = renderWithRouter(<App />);
  it('Testa a rota e adiciona produto, verifica se está listando, editando e deletando', async () => {
    history.push('/newProduct');
    const { pathname } = history.location;
    expect(pathname).toBe('/newProduct');
    const optionCategory = screen.getByRole('option', { name: /automotivo/i });
    const inputName = screen.getByLabelText(/nome do produto/i);
    const inputProvider = screen.getByLabelText(/nome do fornecedor/i);
    const inputValueProduct = screen.getByLabelText(/valor do produto/i);
    const BtnSubmit = screen.getByRole('button', { name: /Enviar/i });
    userEvent.click(optionCategory);
    userEvent.type(inputName, 'Embreagem de cerâmica');
    userEvent.type(inputProvider, 'CeramicPower');
    userEvent.type(inputValueProduct, '999');
    userEvent.click(BtnSubmit);
    history.push('/');
    expect(screen.getByText(/embreagem de cerâmica/i)).toBeInTheDocument();
    expect(screen.getByText(/CeramicPower/i)).toBeInTheDocument();
    // Edita o produto
    const editBtn = screen.getByTestId('edit-btn');
    userEvent.click(editBtn);
    const inputEditName = screen.getByTestId('name');
    const btnSubmitEdit = screen.getByRole('button', { name: /editar/i });
    userEvent.clear(inputEditName);
    userEvent.type(inputEditName, 'Embreagem Multidisco');
    userEvent.click(btnSubmitEdit);
    expect(screen.getByText(/embreagem multidisco/i)).toBeInTheDocument();
    // Deleta Produto
    const deleteBtn = screen.getByTestId('delete-btn');
    userEvent.click(deleteBtn);
    expect(screen.queryByText(/embreagem multidisco/i)).not.toBeInTheDocument();
  });
});