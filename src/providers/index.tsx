import { IChildrenProps } from "../interfaces";
import { ProductsProvider } from "./ProductsProvider";

export function Providers({ children }: IChildrenProps) {
  return <ProductsProvider>{children}</ProductsProvider>;
}
