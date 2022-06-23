import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 20px;
    margin-bottom: 78px;
    text-align: center;
    position: static;
    
    figure {
        img {
            width: 20rem;
            margin: 0 auto;
            cursor: pointer;
        }
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;

    }

`

export const Main = styled.main`
    padding: 0 10px;
    overflow: auto; 
    white-space: nowrap;
    
    @media screen and (min-width: 768px) {
        padding: 0 40px;
        width: 100%;
        overflow-x: visible;
        overflow-y: visible;
        white-space: normal;
    }
`

export const CategoryList = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 50px;
`