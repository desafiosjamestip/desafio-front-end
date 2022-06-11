import styled from 'styled-components'

const Header = styled.section `
    background-color: #101010;
    height: 60px;
    color: #00D0B3;
`;

const Div = styled.div `
    margin: 0 auto;
    width: 920px;
`;

const Button = styled.button `
    margin: 0 auto;
    background-color: #101010;
    color: #00D0B3;
    border: none;
    font-size: 15px;
    cursor: pointer;
    transition: ease 0.2s;
    height: 60px;
    padding-left: 20px;
    padding-right: 20px;

    &:hover {
    background-color: #2d2d2d;
    }
`;

const ButtonSelected = styled.button `
    margin: 0 auto;
    background-color: #2d2d2d;
    color: #00D0B3;
    border: none;
    font-size: 15px;
    cursor: pointer;
    transition: ease 0.2s;
    height: 60px;
    padding-left: 20px;
    padding-right: 20px;
`;

export {Header, Div, Button, ButtonSelected}