import { useHistory } from "react-router-dom";
import ProductsList from "../../components/ProductsList";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { Header } from "./style";

const ProductsListPage = () => {
  const history = useHistory();
  const productHistory = () => {
    history.push("/");
  };
  return (
    <>
      <Header>
        <button onClick={productHistory}>
          <FaAngleDoubleLeft /> Cadastrar novo produto
        </button>
        <h1>Produtos</h1>
      </Header>
      <ProductsList />
    </>
  );
};

export default ProductsListPage;
