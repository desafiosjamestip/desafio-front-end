import { useHistory } from "react-router-dom";
import ProductsListComponents from "../../Components/ProductsList";

import { Container } from "./style";
import Button from "../../Components/Button";

const ProductsList = () => {
  const history = useHistory();

  const toRegister = () => {
    history.push("./register");
  };

  return (
    <div>
      <Container>
        <h3>Lista de Produtos</h3>
        <Button
          className="buttonHome"
          onClick={toRegister}
          children={"Cadastrar Produto"}
        />
      </Container>
      <main>
        <ProductsListComponents />
      </main>
    </div>
  );
};

export default ProductsList;
