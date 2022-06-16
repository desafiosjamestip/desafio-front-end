import { useHistory } from "react-router-dom";
import ProductsListComponents from "../../Components/ProductsList";

import { ContainerHeader, ContainerVitrini, H3 } from "./style";
import Button from "../../Components/Button";

const ProductsList = () => {
  const history = useHistory();

  const toRegister = () => {
    history.push("./register");
  };

  return (
    <ContainerVitrini>
      <ContainerHeader>
        <H3>Lista de Produtos</H3>
        <Button
          className="buttonHome"
          onClick={toRegister}
          children={"Cadastrar Produto"}
          bgcolor={"#E0FFFF"}
          height={"40px"}
        />
      </ContainerHeader>
      <ProductsListComponents />
    </ContainerVitrini>
  );
};

export default ProductsList;
