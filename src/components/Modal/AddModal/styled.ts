import styled from "styled-components";

export const Title = styled.h3`
    color: var(--darkish-color);
    text-align: center;
    font-weight: 700;
    font-size: 20px;
`

export const Form = styled.form`
    height: calc(100% - 65px - 30px); //100% - espaçamento do titilo - padding-bottom
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
    padding: 30px;

    font-size: 14px;
    color: var(--darkish-color);

    div {
        display: flex;
        flex-direction: column;

        label {
            padding: 5px 0;
        }

        input {
            border-radius: 4px;
            height: 39px;
            padding-left: 10px;
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    button {
        align-self: center;
    }

`