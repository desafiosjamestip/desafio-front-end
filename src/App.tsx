import React from 'react';
import { ToastContainer } from 'react-toastify';
import { GlobalStyles } from './ui/GlobalStyles';
import { Page } from './ui/components';
import { Header } from './components/Header';
import Routes from './routes/routes';

import { ProductProvider } from './context/useProduct';
const App = (): JSX.Element => {
  return (
    <ProductProvider>
      <GlobalStyles />
      <Page>
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </Page>
    </ProductProvider>
  );
};

export { App };
