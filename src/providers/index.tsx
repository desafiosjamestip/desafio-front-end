import { ReactNode } from "react";
import { ProductsProvider } from "./productProvider";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <ProductsProvider>{children}</ProductsProvider>;
}
