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
    justify-content: space-between;
    padding: 0 10rem;
`

export const Article = styled.article`
    width: 420px;
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
        /* text-align: left; */
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
    }
`

export const JamesFigure = styled.figure`
    @-webkit-keyframes slide-left {
        0% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
                    opacity: 0;
        }
        100% {
            -webkit-transform: translateX(-100px);
                    transform: translateX(-100px);
                    opacity: 1;
        }
    }
    @keyframes slide-left {
        0% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
                    opacity: 0;
        }
        100% {
            -webkit-transform: translateX(-100px);
                    transform: translateX(-100px);
                    opacity: 1;
        }
    }

    display: flex;
    align-items: center;
    width: 50%;
    justify-content: center;
    -webkit-animation: slide-left 1.2s cubic-bezier(0.680, -0.550, 0.265, 1.550) both;
    animation: slide-left 1.2s cubic-bezier(0.680, -0.550, 0.265, 1.550) both;


`