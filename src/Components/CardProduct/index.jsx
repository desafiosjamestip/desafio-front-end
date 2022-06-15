import { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { VitrineContext } from "../../Providers/listProducts";
import Button from "../Button";
import {
  Container,
  ContainerButton,
  ContainerImg,
  DivValor,
  Img,
} from "./styled";

export const CardProduct = ({ item }) => {
  const { removeProduct } = useContext(VitrineContext);

  const history = useHistory();

  const toEdit = () => {
    history.push(`/update/${item.id}`);
  };

  return (
    <Container>
      <ContainerImg>
        <Img src={item.img} alt={item.nome}></Img>
      </ContainerImg>
      <p>{item.codigo}</p>
      <p>{item.categoria}</p>
      <p>{item.nome}</p>
      <p>{item.fornecedor}</p>
      <DivValor>
        <p> R$: </p>
        <p>{item.valor}</p>
      </DivValor>
      <ContainerButton>
        <Button
          item={item}
          children={"Editar"}
          bgcolor={"#00D0B3"}
          onClick={() => toEdit(item)}
        />
        <Button
          item={item}
          children={"Excluir"}
          bgcolor={"#00D0B3"}
          onClick={() => removeProduct(item)}
          deleteProduct
        />
      </ContainerButton>
    </Container>
  );
};
