/* eslint-disable react/prop-types */
import React, { useState } from 'react'

export const lightTheme = {
  color: '#333',
  background: '#fff',
  border: '2px solid #333'
}

export const darkTheme = {
  color: '#fff',
  background: '#333',
  border: '2px solid #fff'
}

export const ThemeToggleContext = React.createContext({})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <ThemeToggleContext.Provider value={{ toggleTheme, theme: theme === 'light' ? lightTheme : darkTheme, themeName: theme === 'light' ? 'dark mode' : 'light mode' }}>
      { children }
    </ThemeToggleContext.Provider>
  )
}
