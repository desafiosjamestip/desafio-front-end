import React from 'react'
import { LinkContainer, LinkNavigation, NavLinkIcon } from './styled'
/* import test from '@/assets/icons/products-icon.png' */

type ILinkProps = {
    linkName: string
    to: string
    icon: string
}

const NavLink: React.FC<ILinkProps> = ({ linkName, to, icon }) => {
    return (
        <>
            <LinkContainer>
                <NavLinkIcon src={icon} />
                <LinkNavigation to={to}>{linkName}</LinkNavigation>
            </LinkContainer>
        </>
    )
}

export default NavLink
