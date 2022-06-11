import styled from "styled-components"

export const CustomHeader = styled.header`
    width: 100%;
    background-color: transparent;
    height: 70px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 3%;

    img{
        width: 200px;
    }
    
    button{
        margin-top: 0;
        width: 100px;
    }

    @media (min-width: 768px){
        margin-bottom: 20px;
        padding: 0 5%;

        button{
            width: 150px;
        }
    }

`