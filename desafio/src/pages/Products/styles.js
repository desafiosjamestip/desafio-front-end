import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;

  /* MOBILE */

  @media screen and (max-width: 840px) {
    width: 95%;
    margin: 0 auto;
  }
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

  /* MOBILE */

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 24px;
    }
  }
`

export const ProductsFooter = styled.div`
  a {
    color: ${({ theme }) => theme.colors.default.white};
    background: ${({ theme }) => theme.colors.default.black};

    padding: 8px;
    border-radius: 4px;

    transition: opacity .3s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }
`
