import styled from "styled-components";

export const ContainerImage = styled.div`
  display: none;

  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    img {
      width: 80%;
    }
  }
`;
