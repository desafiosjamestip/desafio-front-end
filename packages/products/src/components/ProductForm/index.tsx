import { useState } from "react";
import { Product } from "../../@types/Product";

import { Button } from "../Button";
import { FormGroup } from "../FormGroup";
import Input from "../Input";
import Select from "../Select";

import { Form, ButtonContainer } from "./styles";

interface ProductFormProps {
  onSubmit: (formData: Product) => void;
  title: string;
  data?: Product;
}

export function ProductForm({ onSubmit, title, data }: ProductFormProps) {
  const [name, setName] = useState(data?.name ?? "");
  const [code, setCode] = useState(data?.code ?? "");
  const [category, setCategory] = useState(data?.category ?? "");
  const [provider, setProvider] = useState(data?.provider ?? "");
  const [price, setPrice] = useState(data?.price ?? "");

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
        <h1>{title}</h1>
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
          {title}
        </Button>
      </ButtonContainer>
    </Form>
  );
}
