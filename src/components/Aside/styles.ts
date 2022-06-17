import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    grid-area: AS;
    color: ${props => props.theme.colors.title};

    background-color: ${props => props.theme.colors.primary};
    border-right: 1px solid ${props => props.theme.colors.tertiary};
`;

export const Header = styled.div`
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        height: 75px;
    }
`;

export const Content = styled.div`
    color: ${props => props.theme.colors.title};
    margin: 50px 0 0 10px;
    > ul {
        list-style: none;
    }
`

export const LinkItem = styled(Link)`
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;

`;
