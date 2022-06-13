import styled from "styled-components";

export const Form = styled.form`
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;

  .container_input-label,
  label {
    color: var(--white-1);
    font-size: var(--headline);
    margin: 18px 0;
  }

  section {
    width: 90%;
    margin: 0 auto;
  }

  section:first-child {
    margin-bottom: 18px;
  }

  Button {
    margin: 18px auto;
  }
`;
