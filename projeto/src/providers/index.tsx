import { ReactNode } from "react";
import { UserAuthProvider } from "./Auth";
import { ProductsProvider } from "./Products";
import { UserProvider } from "./UserRegisterProvider";

interface ProvidersProps {
  children: ReactNode;
}

/*
Providers - controla e repassa todos os providers
*/
export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <UserProvider>
        <UserAuthProvider>
          <ProductsProvider>{children}</ProductsProvider>
        </UserAuthProvider>
      </UserProvider>
    </>
  );
};
