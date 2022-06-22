import styled from "styled-components";

export const Title = styled.h3`
    color: var(--darkish-color);
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    /* margin-bottom: 40px; */
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: calc(100% - 15px); // -15 do padding do modal
    
    button {
        width: 100%;
        margin: 10px 0;
    }

`