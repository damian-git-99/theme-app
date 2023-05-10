import { useContext } from 'react'
import { ThemeToggleContext } from './context/ThemeProvider'
import styled, { createGlobalStyle } from 'styled-components'

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  padding: 10px;
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.background};
`

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
  }
  
`

function App () {
  const { theme } = useContext(ThemeToggleContext)
  return (
      <div>
        <GlobalStyles theme={{ ...theme }}/>
        <h1>My App</h1>
        <p>This is some text.</p>
        <Button theme={{ ...theme }}>Click me</Button>
      </div>
  )
}

export default App
