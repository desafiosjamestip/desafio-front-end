import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.header`
  background: linear-gradient(329.54deg, #29b6d1, #00c7c7);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    font-size: 1rem;
    color: #fff;
    background: #12afcb;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
export const LinkRoute = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: opacity 0.2s;
  text-decoration: none;
  font-size: 19px;
  &:hover {
    filter: brightness(0.9);
  }
  svg {
    margin-right: 5px;
  }
`;
