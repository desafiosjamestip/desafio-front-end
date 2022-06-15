import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import { Container, LeftSide, CircularIcon, RightSide } from './styles'
import perfilIMG from '../../assets/perfil.png'

const MainHeader: React.FC = () => (
    <Container>
        <LeftSide>
            <img src={perfilIMG} alt="perfil logo" />
            <h3>Olá, cliente</h3>
        </LeftSide>
        <RightSide>
            <CircularIcon>
                <FiLogOut />
            </CircularIcon>
        </RightSide>
    </Container>
)

export default MainHeader