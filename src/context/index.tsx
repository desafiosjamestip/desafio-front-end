import { IChildrenProps } from "../interfaces/providersInterface";
import { ProductProvider } from "./Products";

const Providers = ({ children }: IChildrenProps) => {
  return <ProductProvider>{children}</ProductProvider>;
};

export default Providers;
