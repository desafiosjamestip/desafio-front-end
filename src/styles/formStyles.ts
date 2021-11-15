import styled from "styled-components"

export const FormContainer = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

export const InputContainer = styled.div`
  background-color: white;
  border-bottom: 2px solid var(--green);
  padding: 0.25rem;
  display: flex;

  input {
    padding: 0.25rem;
    font-size: 1.25rem;
    border:none;
    color: var(--gray-text);
    font-weight: lighter;
    flex: 1;
  }
`

export const DisabledInputContainer = styled(InputContainer)`
  background-color: #cfcfcf;

  input {
    background-color: transparent;
  }
`

export const Button = styled.button`
  background-color: var(--green);
  font-weight: bolder;
  font-size: 1.25rem;
  padding: 0.5rem 1.5rem;
  border:none;
  border-radius: 2rem;
  margin-top: 1rem;
  transition: filter 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
`

export const DeleteButton = styled(Button)`
  background-color: #F56565;
  margin-left: 1rem;
`

