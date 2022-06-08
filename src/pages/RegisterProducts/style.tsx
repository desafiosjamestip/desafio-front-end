import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const ReturnLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 20px;
    color: #fff;
    text-decoration: none;
    margin-bottom: 20px;
`

export const ArrowBackStyle = styled(ArrowBackIcon)`
    transform: scale(2);    
`


export const FormStyle = styled.form`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 270px;
    height: 350px;
    padding: 20px;
    border-radius: 16px;

    @media screen and (max-width: 310px){
        width: 240px;
    }
`

export const InputStyle = styled.input`
    width: 90%;
    padding: 10px 13.5px;
    border-radius: 8px;
    border: none;
    background-color: #f6f6f6;
`

export const ButtonStyle = styled.button`
   border: none;
   border-radius: 8px;
   padding: 10px 0;
   background-color: #00cfb3;
   color: #fff;
   font-weight: bold;
   cursor: pointer;
`