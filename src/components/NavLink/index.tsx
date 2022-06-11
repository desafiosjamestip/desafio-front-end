import React from 'react'
import { LinkContainer, LinkNavigation } from './styled'

type ILinkProps = {
    linkName: string
    to: string
}

const NavLink: React.FC<ILinkProps> = ({ linkName, to }) => {
    return (
        <>
            <LinkContainer>
                <LinkNavigation to={to}>{linkName}</LinkNavigation>
            </LinkContainer>
        </>
    )
}

export default NavLink
