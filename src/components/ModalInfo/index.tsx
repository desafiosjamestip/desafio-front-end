import ModalDelete from "../ModalDelete";
import ModalEdit from "../ModalEdit";

import { useState } from "react";

import { IModalInterface } from "../../interfaces/modalInterfaces";

import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalInfoItem,
  ModalScreen,
  ModalWrapper,
} from "./style";
import { FaTimes } from "react-icons/fa";
import {
  IProductList,
  IProductToDelete,
} from "../../interfaces/providersInterface";

const ModalInfo = ({
  showModal,
  setShowModal,
  info,
  setIsDeleted,
}: IModalInterface) => {
  //useState's para controle dos modais
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  //useState para gerenciar os valores que serão enviados para os modais
  const [valueToEdit, setValueToEdit] = useState<any>();

  // função que se relaciona com o modal de deleção de produtos,
  // recebendo como parâmetro o valor (neste caso, o código do produto) a ser deletado
  const openModalDelete = (value: IProductToDelete) => {
    setShowModalDelete((prev) => !prev);
    setValueToEdit(value);
  };

  // função que se relaciona com o modal de atualização de produtos
  // recebendo como parâmetro o valor (neste caso, o produto completo) a ser deletado
  const openModalUpdate = (value: IProductList) => {
    setShowModalUpdate((prev) => !prev);
    setValueToEdit(value);
  };

  return (
    <>
      {showModal && (
        <ModalScreen>
          <ModalWrapper>
            <ModalHeader>
              <FaTimes onClick={() => setShowModal(false)} />
            </ModalHeader>
            <ModalBody>
              <ModalInfoItem>
                <p>Produto</p>
                <span>{info?.productName}</span>
              </ModalInfoItem>
              <ModalInfoItem>
                <p>Código do produto</p>
                <span>{info?.code}</span>
              </ModalInfoItem>
              <ModalInfoItem>
                <p>Categoria do produto</p>
                <span>{info?.category}</span>
              </ModalInfoItem>
              <ModalInfoItem>
                <p>Nome do fornecedor</p>
                <span>{info?.providerName}</span>
              </ModalInfoItem>
              <ModalInfoItem>
                <p>Valor</p>
                <span>
                  {parseFloat(info?.value!).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </ModalInfoItem>
            </ModalBody>
            <ModalFooter>
              <button className="update" onClick={() => openModalUpdate(info!)}>
                Atualizar
              </button>
              <button className="delete" onClick={() => openModalDelete(info!)}>
                Apagar
              </button>
            </ModalFooter>
          </ModalWrapper>
        </ModalScreen>
      )}
      <ModalDelete
        showModal={showModalDelete}
        setShowModal={setShowModalDelete}
        del={valueToEdit}
        setIsDeleted={setIsDeleted}
      />
      <ModalEdit
        showModal={showModalUpdate}
        setShowModal={setShowModalUpdate}
        edit={valueToEdit}
      />
    </>
  );
};

export default ModalInfo;
