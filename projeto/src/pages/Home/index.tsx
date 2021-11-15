import { Link } from "react-router-dom";
import { HomeImage } from "../../components/HomeImage";
import { ButtonsContainer, HomeContainer } from "./styles";
import { motion } from "framer-motion";

/*
Página de Home.
Utilizei o framer-motion para suavisar a entrada na page
*/

export const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HomeContainer>
          <HomeImage />
          <h2>Bem vindo ao</h2>
          <h1>Logistc Tech</h1>
          <ButtonsContainer>
            <Link to="/register">
              <button>Quero me cadastrar</button>
            </Link>
            <Link to="/login">
              <button>Já tenho uma conta</button>
            </Link>
          </ButtonsContainer>
        </HomeContainer>
      </motion.div>
    </>
  );
};
