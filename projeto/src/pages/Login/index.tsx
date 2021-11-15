import { FormUserLogin } from "../../components/FormUserLogin";
import { LoginImage } from "../../components/LoginImage";
import { LoginContainer } from "./styles";
import { motion } from "framer-motion";

/*
Página de Home.
Recebe o formulário de login
Utilizei o framer-motion para suavisar a entrada na page
*/

export const Login = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <LoginContainer>
          <LoginImage />
          <FormUserLogin />
        </LoginContainer>
      </motion.div>
    </>
  );
};
