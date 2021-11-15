import { RegisterImage } from "../../components/RegisterImage";
import { FormUserRegister } from "../../components/FormUserRegister";
import { RegisterContainer } from "./styles";
import { motion } from "framer-motion";

/*
Página de Register.
Recebe o formulário de cadastro de usuários
Utilizei o framer-motion para suavisar a entrada na page
*/

export const Register = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <RegisterContainer>
          <FormUserRegister />
          <RegisterImage />
        </RegisterContainer>
      </motion.div>
    </>
  );
};
