import { useContext } from 'react'
import './app.css'
import { ThemeToggleContext } from './context/ThemeProvider'
import { createGlobalStyle } from 'styled-components'
import { Header } from './components/Header'

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
    transition: all 300ms;
  }
`

function App () {
  const { theme } = useContext(ThemeToggleContext)
  return (
      <>
      <Header />
      <main>
        <GlobalStyles theme={{ ...theme }}/>
        <h1>My App</h1>
        <p>This is some text.</p>
      </main>
    </>
  )
}

export default App
