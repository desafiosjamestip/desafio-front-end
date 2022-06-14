import styled from "styled-components";

export const Container = styled.div`
  width: 240px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.shape[100]};
  border-radius: 16px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15);

  a {
    text-decoration: none;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;

    small {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.gray[300]};
    }

    span {
      font-size: 16px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  .image-wrapper {
    width: 200px;
    overflow: hidden;

    img {
      width: 300px;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    small {
      font-size: 8px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.gray[250]};
    }

    strong {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.primary.main};
    }

    span {
      font-size: 18px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.gray[900]};
    }
  }
`;
