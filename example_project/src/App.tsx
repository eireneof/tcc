
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/globalStyles'
import ProfilePage from './pages/Profile'
import lightTheme from './styles/themes/custom/lightTheme'

export default function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <ProfilePage />
    </ThemeProvider>
  )
}

// TODO: simplificar a arquitetura de pastas desse projeto e remover o que não está sendo utilizado