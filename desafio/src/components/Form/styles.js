import styled from 'styled-components'

export const Wrapper = styled.form`
  h1 {
    font-weight: normal;
    margin-bottom: 32px;
  }

  /* MOBILE */

  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 24px;

  label {
    margin-bottom: 8px;
  }

  .message {
    color: ${({ theme }) => theme.colors.accent.red};
    font-size: 14px;
  }
`
