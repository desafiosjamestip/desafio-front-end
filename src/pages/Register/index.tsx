import Header from "../../components/Header";
import Form from "../../components/Form";

import { Container, ContainerForm } from "./style";

const Register = () => {
  return (
    <Container>
      <Header />
      <ContainerForm>
        <Form />
      </ContainerForm>
    </Container>
  );
};

export default Register;
