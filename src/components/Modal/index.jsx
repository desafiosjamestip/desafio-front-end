import React, { useContext } from 'react';
import Modal from 'react-modal';
import MyContext from '../../context/MyContext';
import { customStyles } from '../../util/services';
import NewProduct from '../NewProduct';
import { RiCloseFill } from "react-icons/ri";
import './styles.css';

export default function ModalEditProduct() {
  const { modalIsOpen, setIsOpen } = useContext(MyContext);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <RiCloseFill onClick={ closeModal } />
        <NewProduct />
      </Modal>
    </>
  )
}
