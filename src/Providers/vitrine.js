import { createContext } from "react";
import { Products } from "./products";

export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({ children }) => {
  const catalogue = Products;

  return (
    <CatalogueContext.Provider value={{ catalogue }}>
      {children}
    </CatalogueContext.Provider>
  );
};
