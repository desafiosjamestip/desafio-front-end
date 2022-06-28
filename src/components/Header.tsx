import { Link } from "react-router-dom"
import styled from "styled-components";

const HeaderWrapper = styled.header`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: var(--hover-button-background);
    
    ul{
        display: flex;
    }

    li{
        list-style: none;
    }


`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    padding: 0 40px;

    &:hover{
        color: var(--background);
    }
    
`


export function Header() {
    return (
        <HeaderWrapper>
            <nav>
                <ul>
                    <li> <StyledLink to="/">Produtos</StyledLink></li>
                    <li><StyledLink to="/cadastro"> Cadastrar produtos</StyledLink></li>
                </ul>
            </nav>
        </HeaderWrapper>
    )
}