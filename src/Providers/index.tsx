import { ReactNode } from "react";
import { FormsProvider } from "./Forms";

interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return <FormsProvider>{children}</FormsProvider>;
};

export default Providers;
