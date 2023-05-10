/* eslint-disable react/prop-types */
import React, { useState } from 'react'

export const lightTheme = {
  body: '#FFF',
  color: '#ffffff',
  toggleBorder: '#FFF',
  background: '#363537'
}

export const darkTheme = {
  body: '#363537',
  color: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999'
}

export const ThemeToggleContext = React.createContext({})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <ThemeToggleContext.Provider value={{ toggleTheme, theme: darkTheme }}>
      { children }
    </ThemeToggleContext.Provider>
  )
}
