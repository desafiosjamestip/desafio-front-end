import { Dialog } from "@mui/material"
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
            margin-right: 5px;
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
export const CustomDialog = styled(Dialog)`

    >div>div{
        background-color: var(--global-color);
    }

    >div>div>div{
        padding: 24px 0;
    }

    form>label>p{
        color: var(--gray-4);
    }

    form{
        width: 100%;
    }

    form>label{
        min-width: 90%;
    }

    form>button{
        width: 80%;
    }

    button{
        background-color: var(--gray-4);
        color: var(--gray-0);
    }
`

export const ModalDelete = styled.div`
    width: 290px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    p{
        font-weight: 800;
    }

    button{
        width: 70%;
    }
`