import Logo from "../../assets/jamesTipLogo.png"
import Arrow from "../../assets/arrow.png"

import { Header, Main } from "./styled";

import Button from "../../components/Button";
import Product from "../../components/Product";

import { useProduct } from "../../providers/Product";

const DashBoard = () => {

    const { productList, createNewProduct } = useProduct()

    const create = () => {
        const exemplo = {
            name: "a",
            provider: "b",
            category: "c",
            id: 12,
            price: 2
        }

        createNewProduct(exemplo)
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