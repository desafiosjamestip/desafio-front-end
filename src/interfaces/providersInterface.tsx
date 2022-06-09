import { ReactNode } from "react";

export interface IChildrenProps {
  children?: ReactNode;
}

export interface IProductList {
  code: string;
  category: string;
  productName: string;
  providerName: string;
  value: string;
}

export interface IProductToDelete {
  code: string;
}
