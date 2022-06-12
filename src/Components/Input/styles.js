import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  color: #fff;
  div {
    span {
      color: var(--red);
    }
  }
`;

export const InputContainer = styled.div`
  background: var(--white);
  border: 2px solid var(--gray);
  border-radius: 10px;
  color: var(--black);
  width: 100%;
  display: flex;
  transition: 0.4s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}

  input {
    background: #6ec1e4;
    height: 30px;
    align-items: center;
    margin: 10px 0px 30px 0px;
    flex: 1;
    border: 0;
    padding-left: 10px;
    color: var(--black);
    border-radius: 8px;
    &::placeholder {
      color: var(--gray);
    }
  }
`;
