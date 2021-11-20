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
`
