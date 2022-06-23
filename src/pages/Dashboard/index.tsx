import { CategoryList, Header, Main } from "./styled";
import Logo from "../../assets/jamesTipLogo.png"
import Arrow from "../../assets/arrow.png"

import Button from "../../components/Button";
import Modal from "../../components/Modal";
import ProductItem from "../../components/Product";

import { useProduct } from "../../providers/Product";

import { useHistory } from "react-router-dom";

const DashBoard = () => {

    const { productList, changeModalVisibility } = useProduct();
    const history = useHistory();

    return (
        <>
            <Header>
                <figure>
                    <img src={Logo} alt="Logo James Tip" onClick={() => history.push("/")} />
                    <figcaption>James Tip</figcaption>
                </figure>
                <Button onClick={() => changeModalVisibility(true, "add")} newItem >Adicionar novo produto</Button>
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
                            <ProductItem product={product} key={product.id} />
                        ))}
                    </>
                ) : (
                    <span>Não existe nenhum item no banco de dados, por favor adicione!</span>
                )}
            </Main>
        </>
    )
}

export default DashBoard;