import { useState, useId, FormEvent, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { useProducts } from "../../hooks/useProducts";
import { moneyMask } from "../../utils/masks";
import Styled from "./styles";

export default function Form() {
  const id = useId();
  const { addItem, selectedProduct, updateItem } = useProducts();

  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState<string>("");
  const [provider, setProvider] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const handleSave = (event: FormEvent) => {
    event.preventDefault();

    if (location.pathname.includes("create")) {
      const data = {
        id,
        name,
        provider,
        category,
        value,
      };

      addItem(data);
    } else {
      const data = {
        ...selectedProduct,
        name,
        provider,
        category,
        value,
      };

      updateItem(data);
    }

    navigate("/");
  };

  useEffect(()=>{
    if(location.pathname.includes("edit")){
      setName(selectedProduct.name)
      setProvider(selectedProduct.provider)
      setCategory(selectedProduct.category)
      setValue(selectedProduct.value)
    }
  },[])

  return (
    <>
      <Header>
        <Styled.Container onSubmit={handleSave}>
          <Styled.Title>
            {location.pathname.includes("create")
              ? "Adicionar novo produto"
              : "Editar produto"}
          </Styled.Title>
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
            onChange={(e) => setValue(moneyMask(e.target.value))}
          />
          <Button
            id="create-product"
            title="Salvar"
            type="submit"
            onClick={() => {}}
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
