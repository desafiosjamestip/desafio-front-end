import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.25rem;
  border: 1px solid white;

  width: 100%;
  max-width: 360px;

  margin-bottom: 1rem;
`

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: lighter;
  opacity: 0.8;
  margin-bottom: 1rem;
`

export const ProductSupplier = styled.p`
font-size: 0.9rem;
color: var(--green);
font-weight: bolder;

`

export const ProductName = styled.p`
font-size: 1.75rem;

  a {
    border: none;
    background: transparent;
    margin-left: 0.25rem;
    opacity: 0.5;
    cursor: pointer;

    svg {
      height: 1.25rem;
      width: 1.25rem;
    }
  }
`
 
export const ProductPrice = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
`
