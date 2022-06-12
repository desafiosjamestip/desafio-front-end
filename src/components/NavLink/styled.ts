import styled from 'styled-components'
import colors from '@/styles/colors'
import { Link } from 'react-router-dom'

export const LinkContainer = styled.div`
    position: absolute;
    right: 7rem;
    top: 7.4rem;
`

export const LinkNavigation = styled(Link)`
    font-size: 1rem;
    text-decoration: none;
    color: ${colors.gray03};
    vertical-align: super;
`

export const NavLinkIcon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.3rem;
`
