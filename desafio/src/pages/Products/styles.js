import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 32px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-right: 8px;

    img {
      cursor: pointer;
    }
  }

  h1 {
    font-weight: normal;
  }
`
