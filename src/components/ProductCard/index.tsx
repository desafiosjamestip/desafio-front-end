import { IProduct } from "../../@types";
import { useProducts } from "../../providers/ProductsProvider";
import { CardLi } from "./style";

const ProductCard = ({
  code,
  category,
  name,
  suplierName,
  price,
}: IProduct) => {
  const productToDelete = { code, category, name, suplierName, price };
  const {
    productList,
    deleteProduct,
    openModal,
    setOpenModal,
    setSelectedProduct,
  } = useProducts();

  return (
    <CardLi>
      <h3>Nome do produto: {name}</h3>
      <h3>Categoria: {category}</h3>
      <span>Código do produto: {code}</span>
      <span>Fornecedor: {suplierName}</span>
      <span>
        Preço:{" "}
        {price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
      <button onClick={() => deleteProduct(productToDelete)}>
        Remover produto
      </button>
      <button
        onClick={() => {
          setSelectedProduct(productList.find((item) => item.code === code));
          setOpenModal(!openModal);
        }}
      >
        Editar produto
      </button>
    </CardLi>
  );
};

export default ProductCard;
