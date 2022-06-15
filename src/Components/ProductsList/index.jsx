import { useContext } from "react";
import { v4 as uuid } from "uuid";
import { VitrineContext } from "../../Providers/listProducts";
import { Ul, Container } from "./style";
import { CardProduct } from "../CardProduct";

const ProductsListComponents = () => {
  const { listProducts } = useContext(VitrineContext);

  return (
    <Container>
      <Ul>
        {listProducts.map((item, index) => (
          <li key={index} id={uuid()}>
            <CardProduct item={item} />
          </li>
        ))}
      </Ul>
    </Container>
  );
};

export default ProductsListComponents;
