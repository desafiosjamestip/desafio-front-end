import styled from 'styled-components'

interface Props{
    edit?: boolean;
}


export const CardStyle = styled.div`
    background-color: #fff;
    border-radius: 16px;
    margin: 10px;
    padding: 5px 0;
    display: flex;
    flex-direction: column;
`

export const DivCategorie = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
`

export const Id = styled.p`
    font-weight: bold;
`

export const Categorie = styled.p`
    background-color: #00cfb3;
    color: #fff;
    padding: 1px 8px;
    border-radius: 8px;    
    font-weight: bold;
`

export const DivButton = styled.div`
    display: flex;
    gap: 30px;
    justify-content: center;
`

export const Button = styled.button<Props>`
    color: ${props => props.edit ? 'green' : 'red'};
    border: none;
    background-color: transparent;
`