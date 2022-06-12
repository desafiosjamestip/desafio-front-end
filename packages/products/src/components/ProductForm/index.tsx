import { useState } from "react";
import { Product } from "../../@types/Product";

import { Button } from "../Button";
import { FormGroup } from "../FormGroup";
import Input from "../Input";
import Select from "../Select";

import { Form, ButtonContainer } from "./styles";

interface ProductFormProps {
  onSubmit: (formData: Product) => void;
}

export function ProductForm({ onSubmit }: ProductFormProps) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [category, setCategory] = useState("");
  const [provider, setProvider] = useState("");
  const [price, setPrice] = useState("");

  function handleCodeChange(event) {
    setCode(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleProviderChange(event) {
    setProvider(event.target.value);
  }

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  function handleSubmit() {
    onSubmit({ name, code, category, provider, price });
  }

  return (
    <Form>
      <div className="title-container">
        <h1>Cadastrar produto</h1>
      </div>

      <FormGroup>
        <span>Código</span>
        <Input type="number" value={code} onChange={handleCodeChange} />
      </FormGroup>

      <FormGroup>
        <span>Nome do produto</span>
        <Input value={name} onChange={handleNameChange} />
      </FormGroup>
      <FormGroup>
        <span>Categoria</span>
        <Select value={category} onChange={handleCategoryChange}>
          <option value="">Sem categoria</option>
          <option value="eletrônicos">Eletrônicos</option>
          <option value="eletrodomésticos">Eletrodomésticos</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <span>Fornecedor</span>
        <Select value={provider} onChange={handleProviderChange}>
          <option value="">Sem fornecedor</option>
          <option value="kabum">Kabum</option>
          <option value="americanas">Americanas</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <span>Preço</span>
        <Input value={price} onChange={handlePriceChange} />
      </FormGroup>

      <ButtonContainer>
        <Button to="#" onClick={handleSubmit}>
          Cadastrar produto
        </Button>
      </ButtonContainer>
    </Form>
  );
}
