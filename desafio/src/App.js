import { ThemeProvider } from 'styled-components'
import defaultTheme from './assets/styles/themes/default'

import GlobalStyles from './assets/styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <h1>James tip</h1>
    </ThemeProvider>
  )
}

export default App
