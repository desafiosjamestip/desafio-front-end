import Input from "../Input";

import { useForm } from "react-hook-form";

import { IModalInterface } from "../../interfaces/modalInterfaces";

import { ModalBody, ModalHeader, ModalScreen, ModalWrapper } from "./style";
import { FaTimes } from "react-icons/fa";

import { useProduct } from "../../context/Products";

const ModalEdit = ({ showModal, setShowModal, edit }: IModalInterface) => {
  const { updateProduct } = useProduct();

  const { register, handleSubmit } = useForm();

  const handleUpdateProduct = ({
    category,
    code = edit.code,
    productName,
    providerName,
    value,
  }: any) => {
    console.log("olá");
    setShowModal(false);
    updateProduct({ code, category, productName, providerName, value });
  };

  return (
    <>
      {showModal && (
        <ModalScreen>
          <ModalWrapper>
            <ModalHeader onClick={() => setShowModal(false)}>
              <FaTimes />
            </ModalHeader>
            <ModalBody onSubmit={handleSubmit(handleUpdateProduct)}>
              <Input
                type="text"
                name="code"
                register={register}
                label="Código do produto"
                value={edit.code}
                readonly
              />
              <Input
                type="text"
                placeholder={edit.category}
                name="category"
                register={register}
                label="Categoria"
              />
              <Input
                type="text"
                placeholder={edit.productName}
                name="productName"
                register={register}
                label="Nome do produto"
              />
              <Input
                type="text"
                placeholder={edit.providerName}
                name="providerName"
                register={register}
                label="Fornecedor"
              />
              <Input
                type="text"
                placeholder={edit.value}
                name="value"
                register={register}
                label="Valor"
              />
              <div className="update">
                <button type="submit">Atualizar</button>
              </div>
            </ModalBody>
          </ModalWrapper>
        </ModalScreen>
      )}
    </>
  );
};

export default ModalEdit;
