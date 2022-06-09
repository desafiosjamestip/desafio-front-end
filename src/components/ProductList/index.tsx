import { useProduct } from "../../context/Products";
import { IProductList } from "../../interfaces/providersInterface";
import { Container, ContainerCard, ContainerItem } from "./style";
import { useState } from "react";
import {
  FaTrash,
  FaPencilAlt,
  FaSearchPlus,
  FaChevronLeft,
} from "react-icons/fa";
import ModalDelete from "../ModalDelete";
import ModalEdit from "../ModalEdit";
import ModalInfo from "../ModalInfo";
import { useHistory } from "react-router-dom";
import Header from "../Header";
import NotFound from "../../assets/img/not-found.svg";

const ProductList = () => {
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [value, setValue] = useState<any>();
  const { products } = useProduct();
  const history = useHistory();

  const openModalInfo = (value: IProductList) => {
    setShowModalInfo((prev) => !prev);
    setValue(value);
  };
  const openModalDelete = (value: IProductList) => {
    setShowModalDelete((prev) => !prev);
    setValue(value);
  };
  const openModalUpdate = (value: IProductList) => {
    setShowModalUpdate((prev) => !prev);
    setValue(value);
  };

  return (
    <>
      <Header />

      <Container>
        <div className="container-backBtn">
          <FaChevronLeft
            onClick={() => history.push("/register")}
            className="backBtn"
          />
        </div>
        <ContainerItem
          style={
            products.length > 10 ? { overflow: "auto" } : { overflow: "hidden" }
          }
        >
          {products.length > 0 ? (
            products.map((item: IProductList) => {
              return (
                <ContainerCard>
                  <div className="item">
                    <span>{item.code}</span>
                    <span className="productName">{item.productName}</span>
                  </div>
                  <div className="options">
                    <div className="box-item">
                      <FaSearchPlus
                        className="info"
                        onClick={() => openModalInfo(item)}
                      />
                    </div>
                    <FaTrash
                      className="trash"
                      onClick={() => openModalDelete(item)}
                    />
                    <FaPencilAlt
                      className="update"
                      onClick={() => openModalUpdate(item)}
                    />
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
      <ModalDelete
        showModal={showModalDelete}
        setShowModal={setShowModalDelete}
        del={value}
      />
      <ModalEdit
        showModal={showModalUpdate}
        setShowModal={setShowModalUpdate}
        edit={value}
      />
      <ModalInfo
        showModal={showModalInfo}
        setShowModal={setShowModalInfo}
        info={value}
      />
    </>
  );
};

export default ProductList;
