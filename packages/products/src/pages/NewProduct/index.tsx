import { ProductForm } from "../../components/ProductForm";

import { Product } from "../../@types/Product";
import { useProduct } from "../../contexts/Product";

export function NewProduct() {
  const { registerProduct } = useProduct();

  function handleSubmit(formData: Product) {
    const product: Product = {
      category: formData.category,
      code: formData.code,
      name: formData.name,
      price: formData.price,
      provider: formData.provider,
    };

    registerProduct(product);
  }

  return <ProductForm onSubmit={handleSubmit} />;
}
