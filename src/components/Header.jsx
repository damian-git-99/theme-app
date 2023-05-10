import { useContext } from 'react'
import './header.css'
import styled from 'styled-components'
import { ThemeToggleContext } from '../context/ThemeProvider'

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.background};
  border: ${props => props.theme.border};
`

export const Header = () => {
  const { toggleTheme, theme, themeName } = useContext(ThemeToggleContext)
  const handleClick = () => {
    toggleTheme()
  }
  return (
    <header className='header'>
      <nav className='navbar'>
        <div className='navbar-logo'>
          Theme App Example
        </div>
        <ul>
          <li>
            <Button
              onClick={handleClick}
              theme={{ ...theme }}>
              {themeName}
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
