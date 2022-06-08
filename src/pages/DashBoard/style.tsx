import styled from 'styled-components'
import {Link} from "react-router-dom"
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

export const Search = styled.div`
    display: flex;
    gap:30px;
    justify-content: center;
`

export const InputStyle = styled.input`
    border: none;
    border-radius: 8px;
    padding: 0 8px;  
    background-color: #f6f6f6;

    &:focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`

export const ButtonSearch = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #00cfb3;
    color: white;
    border: none;
    padding: 10px;
    font-weight: bold;
    border-radius: 8px;
    
    &:hover{
        filter: brightness(0.8);
    }
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
`


export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 2fr));
    margin-top: 40px;
`

