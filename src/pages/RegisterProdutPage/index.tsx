import { useHistory } from "react-router-dom";
import ProductForm from "../../components/ProductForm";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Header } from "./style";

const ProductRegistration = () => {
  const history = useHistory();

  const productHistory = () => {
    history.push("/products_registered");
  };

  return (
    <>
      <Header>
        <h1>Cadastre um produto:</h1>
        <button onClick={productHistory}>
          Ver produtos listados <FaAngleDoubleRight />
        </button>
      </Header>
      <ProductForm />
    </>
  );
};

export default ProductRegistration;
