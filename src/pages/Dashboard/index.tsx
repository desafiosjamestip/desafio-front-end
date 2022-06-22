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
                    <div className="tableMain">
                        <div className="tableBody">
                            <div className="tableRow">
                                <img src={Arrow} alt="Seta de categoria" className="tableCell imgCell" />
                                <span className="tableCell">Nome do Produto</span>
                                <span className="tableCell">Nome do Fornecedor</span>
                                <span className="tableCell">Categoria do Produto</span>
                                <span className="tableCell">Valor do Produto</span>
                                <span className="tableCell idCell">Código do Produto</span>
                            </div>
                        </div>
                    </div>
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