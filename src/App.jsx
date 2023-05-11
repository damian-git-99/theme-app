import './app.css'
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

function App (props) {
  return (
      <>
      <GlobalStyles />
      <Header />
      <section className='container'>
        <Post />
      </section>
    </>
  )
}

export default App
