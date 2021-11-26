import React from 'react';
import '@testing-library/jest-dom';
import renderWithRouter from './RenderWithRouter';
import App from '../App';


describe('Testa o LocalStorage da aplicação', () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null)
      },
      writable: true
    });
  });
  it('Se ao iniciar a página o localStorage é recuperado', () => {
    renderWithRouter(<App />);
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem).toHaveBeenCalledWith('listProducts');
  });
});