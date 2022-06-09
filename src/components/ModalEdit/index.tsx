import { ModalBody, ModalHeader, ModalScreen, ModalWrapper } from "./style";
import { FaTimes } from "react-icons/fa";
import { useProduct } from "../../context/Products";
import Input from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IModalInterface } from "../../interfaces/modalInterfaces";
import { IProductList } from "../../interfaces/providersInterface";

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
    updateProduct({ code, category, productName, providerName, value });
  };

  return (
    <>
      {showModal && (
        <ModalScreen>
          <ModalWrapper>
            <ModalHeader>
              <FaTimes onClick={() => setShowModal(false)} />
            </ModalHeader>
            <ModalBody onSubmit={handleSubmit(handleUpdateProduct)}>
              {/* <label>Código do produto</label> */}
              <Input
                type="text"
                // placeholder={edit.code}
                name="code"
                register={register}
                label="Código do produto"
                value={edit.code}
                // {...register("code")}
                readonly
              />
              {/* <label>Categoria</label> */}
              <Input
                type="text"
                placeholder={edit.category}
                name="category"
                register={register}
                label="Categoria"
                // {...register("category")}
              />
              {/* <label>Nome do produto</label> */}
              <Input
                type="text"
                placeholder={edit.productName}
                name="productName"
                register={register}
                label="Nome do produto"
                // {...register("productName")}
              />
              {/* <label>Fornecedor</label> */}
              <Input
                type="text"
                placeholder={edit.providerName}
                name="providerName"
                register={register}
                label="Fornecedor"
                // {...register("providerName")}
              />
              {/* <label>Valor</label> */}
              <Input
                type="text"
                placeholder={edit.value}
                name="value"
                register={register}
                label="Valor"
                // {...register("value")}
              />
              <button type="submit">Atualizar</button>
            </ModalBody>
          </ModalWrapper>
        </ModalScreen>
      )}
    </>
  );
};

export default ModalEdit;
