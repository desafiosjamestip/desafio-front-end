import styled from "styled-components";

interface InputContainerStyledProps {
  colorSchema?: boolean;
  borderSchema?: boolean;
}

export const Container = styled.div`
  text-align: center;
  width: 100%;

  .inputErrors {
    color: var(--orangeCore);
    margin-top: 5px;
    font-size: 12px;
  }
`;

export const InputContainer = styled.div<InputContainerStyledProps>`
  background: ${(props) =>
    props.colorSchema ? "var(--white)" : "transparent"};
  border-radius: 10px;
  border: ${(props) =>
    props.borderSchema
      ? "2px solid var(--grayStandOut)"
      : "2px solid var(--white)"};
  color: var(--darkGray);
  padding: 0.5rem;
  width: 100%;
  display: flex;
  transition: 0.4s;

  input {
    background: transparent;
    width: 100%;
    border: none;
    align-items: center;
    color: var(--white);
  }

  img {
    cursor: pointer;
    color: var(--white);
  }
`;
