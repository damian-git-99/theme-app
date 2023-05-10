import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  border: 2px solid ${props => props.theme.toggleBorder};
`
