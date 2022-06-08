import styled from 'styled-components'

export const FormStyle = styled.form`
    background-color: #fff;
    padding: 20px 40px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 16px;    
`

export const DivStyle = styled.div`
    padding: 2.5px;
    margin: 0;
    height: 30px;
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #f6f6f6;
`

export const InputStyle = styled.input`
    border: none;
    width: 100%;
    background-color: #f6f6f6;

    &:focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`

export const ImageStyle = styled.img`
    width: 25px;
    margin-right: 5px;
    background-color: transparent;
`

export const ButtonStyle = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #00cfb3;
    color: #fff;
    padding: 10px 0;
    font-weight: bold;   
`