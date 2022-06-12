import styled from "styled-components";

export const Form = styled.form`
  .title-container {
    margin-bottom: 24px;
    h1 {
      font-size: 24px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
      text-transform: uppercase;
    }
  }

  span {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;

  button {
    width: 240px;

    & + button {
      background: ${({ theme }) => theme.colors.danger.main};
      margin-left: 12px;
    }
  }
`;
