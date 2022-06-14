import { useHistory } from "react-router-dom";

import { Product } from "../../@types/Product";
import { useProduct } from "../../contexts/Product";

import { ProductForm } from "../../components/ProductForm";

export function NewProduct() {
  const { registerProduct } = useProduct();

  const { push } = useHistory();

  function handleSubmit(formData: Product) {
    const product: Product = {
      category: formData.category,
      code: formData.code,
      name: formData.name,
      price: formData.price,
      provider: formData.provider,
    };

    registerProduct(product);
    push("/products");
  }

  return <ProductForm onSubmit={handleSubmit} title="Cadastrar produto" />;
}
