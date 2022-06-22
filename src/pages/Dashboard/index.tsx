import Logo from "../../assets/jamesTipLogo.png"
import Arrow from "../../assets/arrow.png"

import { CategoryList, Header, Main } from "./styled";

import Button from "../../components/Button";

import { useProduct } from "../../providers/Product";
import Modal from "../../components/Modal";
import ProductItem from "../../components/Product";

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
            <Modal />
            <Main>

                <CategoryList>
                    <img src={Arrow} alt="Seta de categoria" />
                    <span>Nome do Produto</span>
                    <span>Nome do Fornecedor</span>
                    <span>Categoria do Produto</span>
                    <span>Valor do Produto</span>
                    <span>Código do Produto</span>
                </CategoryList>
                {productList?.length > 0 ? (
                    <>
                        {productList.map((product) => (
                            <ProductItem product={product} />
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