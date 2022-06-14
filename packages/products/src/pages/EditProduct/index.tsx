import { useHistory, useLocation } from "react-router-dom";

import { Product } from "../../@types/Product";
import { useProduct } from "../../contexts/Product";

import { ProductForm } from "../../components/ProductForm";

export function EditProduct() {
  const { state } = useLocation<Product>();
  const { editProduct, removeProduct } = useProduct();

  const { push } = useHistory();

  function handleSubmit(formData: Product) {
    const product: Product = {
      category: formData.category,
      code: formData.code,
      name: formData.name,
      price: formData.price,
      provider: formData.provider,
    };

    editProduct(formData.code, product);
  }

  function handleRemoveProduct(id: string) {
    const userConfirmation = confirm("Deseja remover o produto?");

    if (userConfirmation) {
      removeProduct(id);
    }

    push("/products");
  }

  return (
    <ProductForm
      onSubmit={handleSubmit}
      onRemove={handleRemoveProduct}
      title="Editar produto"
      data={state}
    />
  );
}
