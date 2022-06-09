import { useProduct } from "../../context/Products";
import { IProductList } from "../../interfaces/providersInterface";
import { Container, ContainerCard, ContainerItem } from "./style";
import { useState } from "react";
import { FaTrash, FaPencilAlt, FaSearchPlus } from "react-icons/fa";
import ModalDelete from "../ModalDelete";
import ModalEdit from "../ModalEdit";
import ModalInfo from "../ModalInfo";
import { useHistory } from "react-router-dom";

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
      <Container>
        <header>
          <button onClick={() => history.push("/")}>Cadastrar</button>
        </header>
        <ContainerItem>
          {products.map((item: IProductList) => {
            return (
              <ContainerCard>
                <div className="item">
                  <span>{item.code}</span>
                  <span>{item.productName}</span>
                </div>
                <div className="options">
                  <FaSearchPlus
                    className="info"
                    onClick={() => openModalInfo(item)}
                  />
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
          })}
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
