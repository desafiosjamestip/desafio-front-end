import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50px;

  font-size: 24px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;

  border: none;
  border-radius: 4px;

  outline: none;

  color: ${({ active }) => (active ? '#101010' : '#FDFDFD')};
  background: ${({ active }) => (active ? '#31F7DC' : '#101010')};

  margin-bottom: 16px;

  transition: opacity .3s ease-in;

  &:hover {
    opacity: 0.8;
  }

  &:last-child {
    margin: 0;
  }

  &:disabled {
    opacity: .3;
  }
`
