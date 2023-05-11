/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

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

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <ThemeToggleContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        { children }
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  )
}
