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
  Variants,
} from "./style";
import NotFound from "../../assets/img/not-found.svg";
import { FaSearchPlus, FaChevronLeft } from "react-icons/fa";
import { motion } from "framer-motion";

import { useProduct } from "../../context/Products";

const ProductList = () => {
  const { products } = useProduct();
  const history = useHistory();

  const [showModalInfo, setShowModalInfo] = useState(false);
  const [value, setValue] = useState<any>();
  const [isDeleted, setIsDeleted] = useState("");

  if (isDeleted === "delete") {
    setShowModalInfo(false);
    setIsDeleted("");
  }

  const openModalInfo = (value: IProductList) => {
    setShowModalInfo((prev) => !prev);
    setValue(value);
  };

  return (
    <>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "", duration: 0.3 }}
        style={{ height: "100vh" }}
      >
        <Header />
        <Container>
          <div
            className="container-backBtn"
            onClick={() => history.push("/register")}
          >
            <FaChevronLeft className="backBtn" />
          </div>
          <ContainerItem
            style={
              products.length > 10
                ? { overflow: "auto" }
                : { overflow: "hidden" }
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
                    <div
                      className="box-item"
                      onClick={() => openModalInfo(item)}
                    >
                      <FaSearchPlus className="info" />
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
      </motion.div>
    </>
  );
};

export default ProductList;
