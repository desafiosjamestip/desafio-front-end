import Styled from 'styled-components';

export const Product = Styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 230px;
    margin-right: 4%;
    padding: 0;
    background-color: #E9ECEC;
    transition: 0.5s;

    &:hover{
        box-shadow: 1px 1px 1px 1px #C6CBCB;
        border-radius: 5px;
        z-index: 1;
        transform: scale(1.2);
    }

    img{
        width: 100%;
        height: 250px;
        border-radius: 6px;
    }

    a{
        font-weight: bold;
        margin-top: 10px;
        font-size: 0.9rem;
    }

    p{

    }

    @media(max-width: 751px){
        width: 240px;
    }
    
    @media(max-width: 520px){
        margin: 0 auto;
        width: 370px;
    }
`;

export const Title = Styled.h1`
    font-size: 1.5rem;
    margin-bottom: 20px;

    @media(max-width: 520px){
        margin: 0 auto;
    }
`;