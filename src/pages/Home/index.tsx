import { PageStyle, Image, DivStyle, LinkStyle, AStyle} from './style'

function Home(){
    return (
        <PageStyle>
            <Image src="https://resultados.jamestip.com/static/media/logo_horizontal_white.f884a3ed.svg" alt="" />
            <DivStyle>
                <LinkStyle to="/login">Faça seu Login</LinkStyle>
                <AStyle href="https://jamestip.com/">Volte para a página inicial</AStyle>
            </DivStyle>
        </PageStyle>
    )
}

export default Home