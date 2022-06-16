import { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { VitrineContext } from "../../Providers/listProducts";
import Button from "../Button";
import {
  Container,
  ContainerButton,
  ContainerDescription,
  ContainerImg,
  Img,
} from "./styled";

export const CardProduct = ({ item }) => {
  const { removeProduct } = useContext(VitrineContext);

  const history = useHistory();

  const toEdit = () => {
    history.push(`/update/${item.id}`);
  };

  return (
    <Container position={"relative"}>
      <ContainerImg>
        <ContainerButton>
          <Button
            item={item}
            children={"X"}
            bdradius={"90px"}
            bgcolor={"#FF0000"}
            onClick={() => removeProduct(item)}
            deleteProduct
            class="excluir"
            width={"20px"}
            height={"20px"}
            color={"#fff"}
          />
        </ContainerButton>
        <Img src={item.img} alt={item.nome}></Img>
      </ContainerImg>
      <ContainerDescription>
        <h4>{item.nome}</h4>
        <p class="categoria">{item.categoria}</p>
        <p class="fornecedor">{item.fornecedor}</p>
        <span>R$: {item.valor}</span>

        <Button
          item={item}
          children={"Editar"}
          bgcolor={"#00D0B3"}
          onClick={() => toEdit(item)}
          width={"100px"}
        />
      </ContainerDescription>
    </Container>
  );
};
