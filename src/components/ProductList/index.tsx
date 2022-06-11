import Header from "../Header";
import ModalInfo from "../ModalInfo";

import { useState } from "react";
import { useHistory } from "react-router-dom";

import { IProductList } from "../../interfaces/providersInterface";

import {
  Container,
  ContainerCard,
  ContainerHeader,
  ContainerItem,
} from "./style";
import NotFound from "../../assets/img/not-found.svg";
import { FaSearchPlus, FaChevronLeft } from "react-icons/fa";

import { useProduct } from "../../context/Products";

const ProductList = () => {
  const { products } = useProduct();
  const history = useHistory();

  const [showModalInfo, setShowModalInfo] = useState(false);
  const [value, setValue] = useState<any>();
  const [isDeleted, setIsDeleted] = useState("");

  // condição que, quando verdadeira, fecha todos os modais abertos
  // nesse caso, esta condição, ela é aplicável apenas para o botão de deletar do "modalDelete"
  if (isDeleted === "delete") {
    setShowModalInfo(false);
    setIsDeleted("");
  }

  // função que abre um modal com as informações do produto selecionado
  const openModalInfo = (value: IProductList) => {
    setShowModalInfo((prev) => !prev);
    setValue(value);
  };

  return (
    <>
      <Header />
      <Container>
        <div
          className="container-backBtn"
          onClick={() => history.push("/register")}
        >
          <FaChevronLeft className="backBtn" />
        </div>

        {/* Aqui realizei uma renderização condicional para, se caso a lista
        ultrapassar uma quantidade determinada de itens, gerar um scroll */}
        <ContainerItem
          style={
            products.length > 10 ? { overflow: "auto" } : { overflow: "hidden" }
          }
        >
          {products.length > 0 ? (
            <ContainerHeader>
              <div>Código</div>
              <div>Nome do produto</div>
              <div>Detalhes</div>
            </ContainerHeader>
          ) : null}
          {products.length > 0 ? (
            products.map((item: IProductList, index: any) => {
              return (
                <ContainerCard key={index}>
                  <span>{item.code}</span>
                  <span className="productName">{item.productName}</span>
                  <div className="teste">
                    <div
                      className="box-item"
                      onClick={() => openModalInfo(item)}
                    >
                      <FaSearchPlus className="info" />
                    </div>
                  </div>
                </ContainerCard>
              );
            })
          ) : (
            <div className="not-found">
              <img src={NotFound} alt="" />
              <p>Nenhum produto cadastrado!</p>
              <button onClick={() => history.push("/register")}>
                Cadastrar produto
              </button>
            </div>
          )}
        </ContainerItem>
      </Container>
      <ModalInfo
        showModal={showModalInfo}
        setShowModal={setShowModalInfo}
        info={value}
        setIsDeleted={setIsDeleted}
      />
    </>
  );
};

export default ProductList;
