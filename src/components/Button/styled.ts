import styled from "styled-components";

export const ButtonStyled = styled.button<{
    confirm?: boolean,
    newItem?: boolean
}>`

    padding: ${(props) => props.confirm ? "0 50px" : "0 24px"};
    width: ${(props) => props.confirm ? "203px" : "inherit"};
    height: ${(props) => props.confirm ? "50px" : props.newItem ? "45px" : "55px"};
    background: ${(props) => props.confirm ? "var(--darkish-color)" : "var(--blueish-color)"};
    color: ${(props) => props.confirm ? "var(--blueish-color)" : props.newItem ? "var(--whiteish-color)" : "var(--darkish-color)"};
    border-radius: 24px;
    font-size: ${(props) => props.confirm || props.newItem ? "20px" : "24px"};
    border: 1px solid transparent;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.4s;
    &:hover {
        background: ${(props) => props.confirm ? "var(--blueish-color)" : "var(--whiteish-color)"};
        color: ${(props) => props.confirm ? "var(--darkish-color)" : "var(--blueish-color)"};
        border: ${(props) => props.confirm && "1px solid var(--darkish-color)"};
    }

    @media screen and (max-width: 425px) {
        font-size: 16px;
    }
`