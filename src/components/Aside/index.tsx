import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { GrAdd } from 'react-icons/gr'
import { Container, Header, Content, LinkItem } from './styles'
import logoIMG from '../../assets/logo-larger.png'

const Aside: React.FC = () => (
    <Container>
        <Header>
            <img src={logoIMG} alt="James Tip Logo" />
        </Header>
        <Content>
            <ul>
                <LinkItem to='/prods/consult' title="Acessar página de consulta">
                    <AiOutlineSearch /><li>Consultar</li>
                </LinkItem>
                <LinkItem to='/prods/create' title="Acessar página de registro">
                    <GrAdd /><li>Adicionar</li>
                </LinkItem>
            </ul>
            <button>HAHAHA</button>
        </Content>
    </Container>
)

export default Aside