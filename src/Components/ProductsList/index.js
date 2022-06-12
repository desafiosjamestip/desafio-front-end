import { useContext } from "react";
import Button from "../Button";
import { v4 as uuid } from "uuid";
import { VitrineContext } from "../../Providers/listProducts";

import "./style.css";

const ProductsListComponents = ({ type }) => {
  const { listProducts } = useContext(VitrineContext);

  return (
    <ul>
      {listProducts.map((item, index) => (
        <li key={index} id={uuid()}>
          <p>{item.codigo}</p>
          <p>{item.categoria}</p>
          <p>{item.nome}</p>
          <p>{item.fornecedor}</p>
          <p>{item.preco}</p>
          <Button type={type} item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ProductsListComponents;
