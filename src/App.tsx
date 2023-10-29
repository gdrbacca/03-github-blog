import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { HashRouter /*,  BrowserRouter */ } from 'react-router-dom'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <HashRouter>
        <Router />
      </HashRouter>
    </ThemeProvider>
  )
}
