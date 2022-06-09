import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalScreen,
  ModalWrapper,
} from "./style";
import { FaTimes } from "react-icons/fa";
import { useProduct } from "../../context/Products";

import { IModalInterface } from "../../interfaces/modalInterfaces";
import { IProductToDelete } from "../../interfaces/providersInterface";

const ModalDelete = ({ showModal, setShowModal, del }: IModalInterface) => {
  const { removeProduct } = useProduct();

  const handleDeleteProduct = (code: IProductToDelete) => {
    removeProduct(code);
    setShowModal(false);
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
              <p>
                Certeza que deseja apagar o item <br /> <b>{del.productName}</b>
                ?
              </p>
            </ModalBody>
            <ModalFooter>
              <button onClick={() => handleDeleteProduct(del.code)}>
                Apagar
              </button>
            </ModalFooter>
          </ModalWrapper>
        </ModalScreen>
      )}
    </>
  );
};

export default ModalDelete;
