import React from 'react'
import { ThemeProvider } from 'styled-components'

import SwitchTheme from './components/SwitchTheme'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

import Routes from './routes'

import GlobalStyle from './styles/global'
import 'leaflet/dist/leaflet.css'
import usePersistedState from './utils/usePersistedState'

function App() {
  const [theme, setTheme] = usePersistedState('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
     <SwitchTheme toggleTheme={toggleTheme} />
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  )
}

export default App;
