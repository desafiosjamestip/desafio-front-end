import {
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";

import { PageForm, Input, Select, Span } from "./style";
import { Button } from "../button";
import { IProduct } from "../../intefaces/product";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useProducts } from "../../providers/productProvider";
interface IModalEditProduct {
  isOpen: boolean;
  onClose: () => void;
  product: IProduct;
}

export function ModalEditProduct({
  isOpen,
  onClose,
  product,
}: IModalEditProduct) {
  const registerSchema = yup.object().shape({
    productName: yup
      .string()
      .max(50, "O nome do produto pode ter no maximo cinquenta caracteres"),
    productCategory: yup.string(),
    productPrice: yup
      .number()
      .required("O novo preço é obrigatório e precisa ser um numeros"),
    productProvider: yup
      .string()
      .max(20, "O fornecedor pode ter no máximo 20 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>({
    resolver: yupResolver(registerSchema),
  });

  const { updateProduct } = useProducts();
  const onProductRegister = (PatchedProduct: IProduct) => {
    if (PatchedProduct.productCategory === "") {
      PatchedProduct.productCategory = product.productCategory;
    }
    if (PatchedProduct.productName === "") {
      PatchedProduct.productName = product.productName;
    }

    if (PatchedProduct.productProvider === "") {
      PatchedProduct.productProvider = product.productProvider;
    }
    PatchedProduct.productCode = product.productCode;

    updateProduct(PatchedProduct);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        border="4px solid #606060"
        boxShadow="-1px 2px 21px 3px #43D0B5"
        height="80vh"
        borderRadius="14px"
      >
        <ModalHeader
          bg="black"
          w="100%"
          textAlign="center"
          fontSize="30px"
          paddingBottom="1%"
          color="#43D0B5"
          borderRadius="10px 10px 0 0"
        >
          Editar Produto
        </ModalHeader>
        <ModalCloseButton marginRight="3%" marginTop="3%" color="white" />
        <ModalBody>
          <PageForm onSubmit={handleSubmit(onProductRegister)}>
            <Input
              {...register("productName")}
              placeholder="Nome do produto(opcional)"
            />
            {errors && <Span>{errors.productName?.message}</Span>}

            <Input
              {...register("productPrice")}
              placeholder="Novo Preço do produto(Obrigatório!)"
            />
            {errors && <Span>{errors.productPrice?.message}</Span>}

            <Select
              id="4"
              {...register("productCategory")}
              placeholder="Nova categoria do produto(opcional)"
            >
              <option value={"Eletrônico"}>eletrônico</option>
              <option value={"Alimento"}>Alimentos</option>
              <option value={"Construção"}>Construção</option>
              <option value={"Automoveis"}>automoveis</option>
              <option value={"Roupas"}>Roupas</option>
              <option value={"Material escolar"}>Material escolar</option>
              <option value={"Produtos agricolas"}>Produtos agricolas</option>
              <option value={"Petz"}>Petz</option>
            </Select>

            <Input
              {...register("productProvider")}
              placeholder="Novo fornecedor do produto(opcional)"
            />
            {errors && <Span>{errors.productProvider?.message}</Span>}

            <Button text="Salvar alterações" />
          </PageForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
