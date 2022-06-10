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

const ModalInfo = ({
  showModal,
  setShowModal,
  info,
  setIsDeleted,
}: IModalInterface) => {
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [valueToEdit, setValueToEdit] = useState<any>();

  const openModalDelete = (value: any) => {
    setShowModalDelete((prev) => !prev);
    setValueToEdit(value);
  };
  const openModalUpdate = (value: any) => {
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
              <button className="update" onClick={() => openModalUpdate(info)}>
                Atualizar
              </button>
              <button className="delete" onClick={() => openModalDelete(info)}>
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
