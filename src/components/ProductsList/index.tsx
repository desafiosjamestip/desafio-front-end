import { useProducts } from "../../providers/ProductsProvider";
import ProductCard from "../ProductCard";
import ProductEditForm from "../ProductEditModal";
import { UlProducts } from "./style";

const ProductsList = () => {
  const { productList, openModal } = useProducts();

  return (
    <>
      <UlProducts>
        {productList.map((product, index) => (
          <ProductCard
            key={index}
            code={product.code}
            category={product.category}
            name={product.name}
            suplierName={product.suplierName}
            price={product.price}
          />
        ))}
      </UlProducts>
      {openModal && <ProductEditForm />}
    </>
  );
};

export default ProductsList;
