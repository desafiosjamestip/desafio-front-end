import styled from 'styled-components'

const Form = styled.div `
    margin-left: -40px;
    width: 100%;
`;

const InputArea = styled.div `
    display: flex;
`;

const H1 = styled.h1 `
    color: black;
    font-size: 20px;
    margin-left: 39px;
    margin-top: 40px;
`;

const Ul = styled.ul `
    color: black;
    font-size: 14px;
    list-style: none;
    margin-top: 15px;
    width: 50%;
`;

const Li = styled.li `
    margin-top: 15px;
    color: rgb(40, 40, 40);
    width: 100%;
`;

const ButtonSubmit = styled.button `
    border: none;
    background-color: #00D0B3;
    color: rgb(247, 247, 247);
    margin-left: 39px;
    margin-top: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 15px;
    cursor: pointer;
    transition: ease 0.2s;

    &:hover {
        background-color: rgb(0, 179, 155);
    }
`;

const Input = styled.input `
    color: black;
    border: none;
    background-color: rgb(247, 247, 247);
    padding: 5px;
    width: 100%;
`;

export {Form, InputArea, H1, Ul, Li, ButtonSubmit, Input}