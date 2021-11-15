import { DashboardImage } from "../../components/DashboardImage";
import { FormProducts } from "../../components/FormProducts";
import { ContainerDashboard } from "./styles";
import { motion } from "framer-motion";
import { Header } from "../../components/Header";

/*
Página de Dashboard (cadastro de produtos).
Utilizei o framer-motion para suavisar a entrada na page
*/

export const Dashboard = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <ContainerDashboard>
          <DashboardImage />
          <FormProducts />
        </ContainerDashboard>
      </motion.div>
    </>
  );
};
