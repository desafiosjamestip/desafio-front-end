import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Styled from "./styles";

export default function Form() {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [provider, setProvider] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [value, setValue] = useState<string>("");

  return (
    <>
      <Header>
        <Styled.Container>
          <Styled.Title>Adicionar novo produto</Styled.Title>
          <Input
            required
            id="product-name"
            label="Nome do produto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            required
            id="product-provider"
            label="Fornecedor"
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
          />
          <Input
            required
            id="product-category"
            label="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Input
            required
            id="product-value"
            label="Valor"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            id="create-product"
            title="Salvar"
            onClick={() => navigate("/")}
          >
            Salvar
          </Button>
          <Button
            id="discard-product"
            title="Cancelar"
            onClick={() => navigate("/")}
          >
            Cancelar
          </Button>
        </Styled.Container>
      </Header>
    </>
  );
}
