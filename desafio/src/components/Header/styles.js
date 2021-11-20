import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100px;

  background: ${({ theme }) => theme.colors.default.black};

  img {
    width: 300px;
    height: 100px;
  }

`
