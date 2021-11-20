import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../../Routes'

import defaultTheme from '../../assets/styles/themes/default'
import GlobalStyles from '../../assets/styles/global'

import { Wrapper } from './styles'

import Header from '../Header'

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Header />
        <Wrapper>
          <Routes />
        </Wrapper>
      </ThemeProvider>
    </BrowserRouter>
  )
}
