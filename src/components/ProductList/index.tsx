import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../providers/ProductsProvider";
import { ProductListContainer } from "./styles";
import { IProduct } from "../../interfaces";
import { ProductCard } from "../ProductCard";

export const ProductList = () => {
  const { getProducts, updater, setUpdater } = useContext(ProductsContext);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const products = getProducts();
    setProducts(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const products = getProducts();
    setProducts(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updater]);

  return (
    <ProductListContainer>
      {products.map((product, index) => {
        const productProps = {
          snu: product.snu,
          category: product.category,
          name: product.name,
          manufacturer: product.manufacturer,
          price: product.price,
          id: product.id,
        };
        return <ProductCard key={index} {...productProps} />;
      })}
    </ProductListContainer>
  );
};
