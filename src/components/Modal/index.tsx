import { ReactNode } from "react";
import { useProduct } from "../../providers/Product";

import AddModal from "./AddModal";
import EditModal from "./EditModal";
import RemoveModal from "./RemoveModal";

const Modal = () => {

  const { modalType } = useProduct()

  return (
    <>
      {modalType === "add" ? (
        <AddModal />
      ) : modalType === "edit" ? (
        <EditModal />
      ) : modalType === "delete" && (
        <RemoveModal />
      )}
    </>
  )
}

export default Modal;