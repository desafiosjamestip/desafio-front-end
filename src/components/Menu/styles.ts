import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  width: 100vw;
  max-width: 1040px;
  margin: 0 auto;
`

export const Link = styled.a`
  padding: 1rem;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  
  &:hover{
    border-bottom: 2px solid white;
  }
`