import styled from 'styled-components'

export const Wrapper = styled.div`
  display: ${({ display }) => (display ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;

  padding: 16px;

  position: fixed;
  top: 24px;
  left: 24px;

  width: 400px;
  height: 48px;

  background: ${({ success }) => (success ? '#FFFFF9' : '#FFFFF9')};
  color: ${({ success }) => (success ? 'rgba(97, 206, 112, 1)' : 'rgba(242, 103, 103, 1)')};

  z-index: 9999;

  border: 1px solid ${({ success }) => (success ? 'rgba(97, 206, 112, 1)' : 'rgba(242, 103, 103, 1)')};
  border-radius: 10px;

  font-weight: bold;
  font-size: 14px;

  button {
    outline: none;
    border: none;
    background: none;

    span {
      font-size: 20px;
      color: ${({ success }) => (success ? 'rgba(97, 206, 112, 1)' : 'rgba(242, 103, 103, 1)')};
    }
  }

  /* MOBILE */

  @media screen and (max-width: 440px) {
    width: 300px;
    font-size: 10px;
  }
`
