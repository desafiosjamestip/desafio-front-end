import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IProductsProviderProps {
  children: ReactNode;
}

export interface IProduct {
  code: string | never[];
  category: string | never[];
  name: string | never[];
  suplierName: string | never[];
  price: number | never[];
}

export interface IProductsProviderData {
  productList: IProduct[];
  newProduct: IProduct;
  openModal: boolean;
  code: string;
  category: string;
  name: string;
  suplierName: string;
  price: number;
  selectedProduct: IProduct | undefined;
  setSelectedProduct: Dispatch<SetStateAction<IProduct | undefined>>;
  setProductCode: Dispatch<SetStateAction<string>>;
  setProductCategory: Dispatch<SetStateAction<string>>;
  setProductName: Dispatch<SetStateAction<string>>;
  setProductSuplier: Dispatch<SetStateAction<string>>;
  setProductPrice: Dispatch<SetStateAction<number>>;
  setOpenModal: (openModal: boolean) => void;
  createNewProduct: (product: IProduct) => void;
  deleteProduct: (product: IProduct) => void;
  updateProduct: (product: IProduct) => void;
}
