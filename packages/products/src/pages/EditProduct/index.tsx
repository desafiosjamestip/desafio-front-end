import { useLocation } from "react-router-dom";

import { Product } from "../../@types/Product";
import { useProduct } from "../../contexts/Product";

import { ProductForm } from "../../components/ProductForm";

export function EditProduct() {
  const { state } = useLocation<Product>();
  const { editProduct } = useProduct();

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
  return (
    <ProductForm onSubmit={handleSubmit} title="Editar produto" data={state} />
  );
}
