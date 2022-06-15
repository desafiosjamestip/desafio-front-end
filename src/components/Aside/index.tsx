import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosAddCircleOutline } from 'react-icons/Io'
import { Container, Header, Content, LinkItem } from './styles'
import logoIMG from '../../assets/logo-larger.png'

const Aside: React.FC = () => (
    <Container>
        <Header>
            <img src={logoIMG} alt="James Tip Logo" />
        </Header>
        <Content>
            <ul>
                <LinkItem to='/'>
                    <AiOutlineSearch /><li>Consultar</li>
                </LinkItem>
                <LinkItem to='/'>
                    <IoIosAddCircleOutline /><li>Adicionar</li>
                </LinkItem>
            </ul>
            <button>HAHAHA</button>
        </Content>
    </Container>
)

export default Aside