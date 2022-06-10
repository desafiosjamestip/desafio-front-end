import styled from "styled-components"

export const CustomLi = styled.li`
    display: flex;
    border: solid 1px var(--global-color);
    justify-content: space-around;
    align-items: center;
    width: 95%;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 30px;

    div{
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-evenly;
       
    }

    svg{
        color: var(--gray-0);
        cursor: pointer;
        margin-right: 15px;
    }

    p{
        color: var(--gray-0);
        width: 150px;
        text-align: center;
    }

    p:nth-of-type(2){
        display: none;
    }

    p:nth-of-type(3){
        display: none;
    }

    p:nth-of-type(5){
        display: none;
    }

    @media (min-width: 728px) {
        svg{
            color: var(--gray-0);
            cursor: pointer;
            margin-right: 0;
        }
        p:nth-of-type(2){
            display: block;
        }

        p:nth-of-type(3){
            display: block;
        }

        p:nth-of-type(5){
            display: block;
        }
    }
`