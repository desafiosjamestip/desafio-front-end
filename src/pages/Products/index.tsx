import { ContainerHome } from "./style";
import { useEffect, useState } from "react";

import Modal from "../../components/Modal";
import { FormModalEdit } from "../../components/Form/FormModalEdit";
import { CardProduct } from "../../components/CardProduct";
import SmallButton from "../../components/SmallButton";
import { useHistory } from "react-router-dom";

export const ProductsPage = () => {
  const [openModalReg, setOpenModalReg] = useState(false);

  const [products, setProducts] = useState([]);
  const [productsId, setProductsId] = useState("");

  const token = useState(localStorage.getItem("@JamesTip:token") || "");

  const history = useHistory();

  const LeavePage = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <>
      <ContainerHome>
        <section className="container_home-logo">
          <div>
            <h1>JamesTip</h1>
          </div>
          <div>
            <SmallButton padding="10px" onClick={LeavePage()}>
              Voltar
            </SmallButton>
          </div>
        </section>
        <section className="container_home-tec">
          <h2>Produtos Cadastrados</h2>
          <SmallButton
            padding="7px 14px"
            onClick={() => setOpenModalReg(!openModalReg)}
          >
            +
          </SmallButton>
        </section>
        <section className="container_home-list">
          {products.length > 0 ? (
            <div
              className="container_home-list-div"
              onClick={() => setOpenModalReg(!openModalReg)}
            >
              <CardProduct products={products} setProductsId={setProductsId} />
            </div>
          ) : (
            <></>
          )}
        </section>
      </ContainerHome>
      <div>
        <Modal open={openModalReg}>
          <section className="container_modal-header">
            <h1>Editar Produtos</h1>
            <button onClick={() => setOpenModalReg(!openModalReg)}>X</button>
          </section>
          <FormModalEdit products={products} setProducts={setProducts} />
        </Modal>
      </div>
    </>
  );
};
