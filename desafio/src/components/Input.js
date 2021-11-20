import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  height: 50px;

  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 4px;

  padding: 0 16px;
  font-size: 18px;

  outline: none;
  transition: border-color .3s ease-in;

  &::placeholder {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.gray[100]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent.blue};
  }
`
