import Button from "../../components/Button";
import { ContainerLogin } from "./style";
import { useHistory } from "react-router-dom";
import { FormProduct } from "../../components/Form/FormProduct";

export const FormProductPage = () => {
  const history = useHistory();

  const handleProductPage = () => {
    history.push("/products");
  };

  return (
    <ContainerLogin>
      <h1>JamesTip</h1>
      <section className="container_login-form">
        <h2>Cadastrar Produto</h2>
        <FormProduct />
        <Button backgroundColor="#868e96" onClick={() => handleProductPage()}>
          Ver Produtos Cadastrados
        </Button>
      </section>
    </ContainerLogin>
  );
};
