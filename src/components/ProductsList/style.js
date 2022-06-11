import styled from "styled-components"

export const CustomUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    padding-top: 30px;
    border-radius: 10px;
    border: solid 1px var(--global-color);
    margin-bottom: 30px;
`

export const Description = styled.div`
    width: 80%;
    padding-right: 50px;
    border-bottom: solid 1px var(--global-color);
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
    padding-bottom: 5px;

    p{
        color: var(--gray-0);
        width: 150px;
        text-align: center;
        font-weight: 700;
    }
    p:nth-of-type(3){
        display: none;
    }

    p:nth-of-type(2){
        display: none;
    }

    p:nth-of-type(5){
        display: none;
    }

    @media (min-width: 728px) {
        p:nth-of-type(3){
            display: block;
        }

        p:nth-of-type(2){
            display: block;
        }

        p:nth-of-type(5){
            display: block;
        }
    }

`
export const CustomLi = styled.li`
    color: var(--gray-0);
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 18px;
    padding-bottom: 30px;
`