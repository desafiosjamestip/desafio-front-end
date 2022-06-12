import styled from 'styled-components'

export const ProductsContainer = styled.div`
    height: 80vh;
    width: 90vw;
    border-radius: 1rem;
    background-color: white;
`

export const ProductsHeaderContainer = styled.div`
    height: 10vh;
    width: 100%;
    border-radius: 1rem 1rem 0 0;
    display: flex;
    background-color: #00cfb3;
    padding: 1.5rem;
`

export const ProductsListContainer = styled.div`
    height: 70vh;
    width: 90vw;
    border-radius: 1rem;
    border-radius: 0 0 1rem 1rem;
    display: flex;
    background-color: #e6e6e6;
    padding: 1.5rem 1.5rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: initial;
    overflow: scroll;
    overflow-x: hidden;
`
