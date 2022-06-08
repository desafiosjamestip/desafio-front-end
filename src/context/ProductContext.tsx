import { createContext, ReactNode } from "react";

export const ProductContext = createContext(null);

type ProductProvider = {
  children: ReactNode;
}

const ProductProvider = (props: ProductProvider) => {
  return(
  <ProductContext.Provider value={null}>
    {props.children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };
export default ProductContext;
