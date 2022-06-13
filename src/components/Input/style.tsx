import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
`;

export const InputContainer = styled.div`
  .container_input-label {
    color: var(--grey-0);
    font-size: var(--headline);
  }

  input {
    background-color: var(--grey-2);
    border-radius: var(--radios-inputs-buttons);
    border: 1.5px solid transparent;
    color: var(--grey-1);
    padding: 1rem;
    width: 100%;
    display: flex;
    transition: 0.4s;
    align-items: center;
    flex: 1;
    height: 100%;

    &::placeholder {
      color: var(--grey-1);
    }
  }
  section {
    width: 10%;
  }
`;
