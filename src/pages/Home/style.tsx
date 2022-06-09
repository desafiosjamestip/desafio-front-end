import styled from "styled-components"
import { Link } from "react-router-dom"

export const PageStyle = styled.section`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #282c34;

    @media screen and (max-width: 1100px){
        flex-direction: column;
    }
`

export const Image = styled.img`
    width: 800px;

    @media screen and (max-width: 800px){
        width: 600px;
    }

    @media screen and (max-width: 600px){
        width: 300px;
    }

    @media screen and (max-width: 300px){
        width: 250px;
    }
`

export const DivStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`

export const LinkStyle = styled(Link)`
    background-color: #00cfb3;
    text-decoration: none;
    color: white;
    font-weight: bold;
    padding: 10px 80px;
    border-radius: 8px;
`

export const AStyle = styled.a`
    background-color: #00cfb3;
    text-decoration: none;
    color: white;
    font-weight: bold;
    padding: 10px 40px;
    border-radius: 8px;
`