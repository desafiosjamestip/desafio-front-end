import styled from 'styled-components';
import {Link} from "react-router-dom";

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 100%;
    background-color: #000;
`

export const ImageStyle = styled.img`
    width: 190px;
`

export const MainStyle = styled.main`
    min-height: 100vh;
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const DivAdd = styled.div`
    display: flex;
    flex-direction: column;   
`

export const LinkAdd = styled(Link)`
    display: flex;
    align-self: flex-end;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    text-decoration: none;
    background-color: #00cfb3;
    color: #fff;
    width: 180px;
    padding: 10px;
    margin-right: 50px;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
`


export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 2fr));
    margin-top: 40px;
`

