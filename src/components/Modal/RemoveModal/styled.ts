import styled from "styled-components";

export const Title = styled.h3`
    color: var(--darkish-color);
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    margin-top: 20px;
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: calc(100% - 25px - 20px); // -25px do padding do modal, -20px do margin do titulo
    
    button {
        width: 100%;
        margin: 10px 0;
    }

`