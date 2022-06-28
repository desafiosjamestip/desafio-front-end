import styled from "styled-components";

const StyledFooter = styled.footer`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export function Footer() {


    return (
        <StyledFooter>
            <p>Feito com ❤️️ por Ana</p>
        </StyledFooter>
    )
}