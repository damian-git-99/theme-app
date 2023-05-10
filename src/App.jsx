import { useContext } from 'react'
import './app.css'
import { ThemeToggleContext } from './context/ThemeProvider'
import { createGlobalStyle } from 'styled-components'
import { Header } from './components/Header'
import { Post } from './components/Post'

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
      <GlobalStyles theme={{ ...theme }}/>
      <section className='container'>
        <Post />
      </section>
    </>
  )
}

export default App
