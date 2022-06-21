import Logo from "../../assets/jamesTipLogo.png"
import Arrow from "../../assets/arrow.png"

import { Header, Main } from "./styled";

import Button from "../../components/Button";
import Product from "../../components/Product";

import { useProduct } from "../../providers/Product";
import Modal from "../../components/Modal";

const DashBoard = () => {

    const { productList, changeModalVisibility } = useProduct()

    const create = () => {

        changeModalVisibility(true)
        
    }

    return (
        <>
            <Header>
                <figure>
                    <img src={Logo} alt="Logo James Tip" />
                    <figcaption>James Tip</figcaption>
                </figure>
                <Button onClick={() => create()} newItem >Adicionar novo produto</Button>
            </Header>
            <Modal/>
            <Main>
                {productList?.length > 0 ? (
                    <>
                        {productList.map((product) => (
                            <Product />
                        ))}
                    </>
                ) : (
                    <span>Por favor, adicione itens!</span>
                )}
            </Main>
        </>
    )
}

export default DashBoard;