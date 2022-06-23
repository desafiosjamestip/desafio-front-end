import { Article, Header, JamesFigure, Main } from "./styled";

import Logo from "../../assets/jamesTipLogo.png"
import BigLogo from "../../assets/bigJamesTip.png"
import Arrow from "../../assets/arrow.png"

import Button from "../../components/Button";

import { useHistory } from "react-router-dom";

const LandingPage = () => {

    const history = useHistory();

    return (
        <>
            <Header>
                <figure>
                    <img src={Logo} alt="Logo James Tip" />
                    <figcaption>James Tip</figcaption>
                </figure>
            </Header>

            <Main>
                <Article>
                    <div>
                        <img src={Arrow} alt="Seta do titulo" />
                        <h5>Inteligência Artificial</h5>
                    </div>
                    <h1>
                        Fature mais com o controle do seu estoque
                    </h1>
                    <p>
                        Use a plataforma para criar, editar e excluir seus produtos de forma fácil.
                    </p>
                    <span>
                        James Tip é a startup com a tecnologia de previsão de demanda mais avançada do mercado.
                    </span>
                    <Button onClick={() => history.push("/dashboard")}>Conheça nossa solução</Button>
                </Article>

                <JamesFigure>
                    <img src={BigLogo} alt="James Tip" />
                    <figcaption>James Tip</figcaption>
                </JamesFigure>
            </Main>
        </>
    )
}

export default LandingPage;