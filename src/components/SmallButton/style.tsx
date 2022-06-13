import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props: any) => props.backgroundColor};
  color: var(--white-1);
  border: 0;
  border-radius: var(--radios-inputs-buttons);
  transition: 0.5s;
  padding: ${(props: any) => props.padding};
  height: fit-content;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: var(--headline);

  :hover {
    background-color: ${(props: { backgroundColor: string }) =>
      props.backgroundColor === "#00d0b3" ? "#026e60" : "#343b41"};
  }
`;
