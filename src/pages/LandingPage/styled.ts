import styled from "styled-components";

export const Header = styled.header`
    padding-top: 20px;
    margin-bottom: 78px;
    text-align: center;
    
    figure {
        img {
            width: 20rem;
            margin: 0 auto;
        }
    }
`

export const Main = styled.main`
    display: flex;
    justify-content: center;
    padding: 0 10px;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    
    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        
    }
`

export const Article = styled.article`
    width: 295px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: justify;
    
    div {
        display: flex;
        align-items: center;
        
        h5 {
            margin-left: 10px;
        }
    }
    
    h1 {
        color: var(--blueish-color);
        font-size: 48px;
        font-weight: 800;
        line-height: 58px;
    }
    
    div, h1, p {
        margin-bottom: 10px;
    }

    button {
        align-self: flex-start;
        margin-top: 25px;
        margin-bottom: 30px;
    }
    
    @media screen and (min-width: 425px) {
        width: 420px;

    }

    @media screen and (min-width: 768px) {
        button {
            margin-bottom: 0;
    
        }
    }
`

export const JamesFigure = styled.figure`
    @keyframes slide-left {
        0% {
            -webkit-transform: translateX(100px);
            transform: translateX(100px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
    }

    display: none;

    -webkit-animation: slide-left 1.2s cubic-bezier(0.680, -0.550, 0.265, 1.550) both;
    animation: slide-left 1.2s cubic-bezier(0.680, -0.550, 0.265, 1.550) both;

    @media screen and (min-width: 424px) {
        display: flex;
        justify-content: center;
        width: 100%;
        
    }
    
    @media screen and (min-width: 768px) {
        justify-content: center;
        align-self: center;
        width: 50%;
    }
`