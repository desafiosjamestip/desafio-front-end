import { Container } from './styles'
import MainHeader from '../components/MainHeader'
import Content from '../components/Content'
import Aside from '../components/Aside'

type TLayout = {
    children?: React.ReactNode
}

const Layout: React.FC<TLayout> = ({ children }) => (
    <Container>
        <MainHeader/>
        <Aside/>
        <Content>
            { children }
        </Content>
    </Container>
)

export default Layout