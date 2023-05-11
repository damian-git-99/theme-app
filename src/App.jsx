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

function App () {
  return (
      <>
      <GlobalStyles />
      <Header />
      <section className='container posts'>
        <h1>Recent Posts</h1>
        <div className='post-layout'>
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </section>
    </>
  )
}

export default App
