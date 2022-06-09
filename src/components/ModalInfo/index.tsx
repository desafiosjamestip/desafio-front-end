import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalInfoItem,
  ModalScreen,
  ModalWrapper,
} from "./style";
import { FaTimes } from "react-icons/fa";
import { IModalInterface } from "../../interfaces/modalInterfaces";

const ModalInfo = ({ showModal, setShowModal, info }: IModalInterface) => {
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
                <span>R$ {info?.value}</span>
              </ModalInfoItem>
            </ModalBody>
            <ModalFooter>
              <button className="update">Atualizar</button>
              <button className="delete">Apagar</button>
            </ModalFooter>
          </ModalWrapper>
        </ModalScreen>
      )}
    </>
  );
};

export default ModalInfo;
