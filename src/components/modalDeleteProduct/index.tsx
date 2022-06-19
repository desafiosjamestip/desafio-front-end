import {
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import { DeleteText, ButtonDelete, DivButton, ButtonCancel } from "./style";
import { useProducts } from "../../providers/productProvider";

interface IModalDeleteProduct {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productCode: string;
}

export function ModalDeleteProduct({
  isOpen,
  onClose,
  productName,
  productCode,
}: IModalDeleteProduct) {
  const { deleteProduct } = useProducts();

  const handleClickToDelete = () => {
    deleteProduct(productCode);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        border="4px solid #606060"
        marginTop="10%"
        boxShadow="-1px 2px 21px 3px #FF1A25"
        height="40vh"
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
          Excluir Produto
        </ModalHeader>
        <ModalCloseButton marginRight="3%" marginTop="3%" color="white" />
        <ModalBody>
          <DeleteText>
            Tem certeza de que desejar excluir o produto "
            {productName && productName}
            "?
          </DeleteText>
          <DivButton>
            <ButtonCancel onClick={onClose}>Cancelar</ButtonCancel>
            <ButtonDelete onClick={handleClickToDelete}>Deletar</ButtonDelete>
          </DivButton>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
