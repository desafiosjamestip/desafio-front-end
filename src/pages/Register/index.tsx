import Header from "../../components/Header";
import Form from "../../components/Form";

import { motion } from "framer-motion";

import { Container, ContainerForm } from "./style";

const Register = () => {
  return (
    <Container>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "", duration: 0.3 }}
      >
        <Header />
        <ContainerForm>
          <Form />
        </ContainerForm>
      </motion.div>
    </Container>
  );
};

export default Register;
