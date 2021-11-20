import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../../Routes'

import defaultTheme from '../../assets/styles/themes/default'
import GlobalStyles from '../../assets/styles/global'

import { Wrapper } from './styles'

import Header from '../Header'
import { ProductProvider } from '../../contexts/ProductContext'

export default function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Header />
          <Wrapper>
            <Routes />
          </Wrapper>
        </ThemeProvider>
      </BrowserRouter>
    </ProductProvider>
  )
}
