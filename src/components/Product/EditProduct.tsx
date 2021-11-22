import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IProduct, useProduct } from "../../contexts/ProductContext";
import FormProduct from "../FormProduct";

interface EditProductProps {
  product: IProduct;
}

const EditProduct = ({ product }: EditProductProps) => {
  const [open, setOpen] = useState(false);
  const { editProduct } = useProduct();
  const handleUpdate = (newProduct: IProduct) => {
    editProduct({ ...newProduct, uuid: product.uuid });
    setOpen(false);
  };
  return (
    <>
      <FiEdit size={16} onClick={() => setOpen(true)} />
      {open && (
        <FormProduct
          isOpen={open}
          onRequestClose={() => setOpen(false)}
          title='Edit product'
          buttonText='Save'
          onSubmit={handleUpdate}
          defaultValue={product}
        />
      )}
    </>
  );
};

export default EditProduct;
