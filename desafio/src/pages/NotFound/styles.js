import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 18px;

    a {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.accent.blue};
    }
  }

  /* MOBILE */

  @media screen and (max-width: 420px) {
    span {
      font-size: 14px;
    }
  }
`
