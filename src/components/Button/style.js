import styled from "styled-components"

export const CustomButton = styled.button`
    border: none;
    width: 100%;
    border-radius: 24px;
    font-weight: 800;
    color: var(--gray-4);
    font-size: 16px;
    height: 40px;
    background-color: var(--global-color);
    margin-top: 20px;

    :hover{
        opacity: 0.9;
    }

    @media (min-width: 768px){
        margin-top: 0;
    }
`