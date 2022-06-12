import { useState } from "react";

import { Product } from "../../@types/Product";

import { Button } from "../Button";
import { FormGroup } from "../FormGroup";
import Input from "../Input";
import Select from "../Select";

import useErrors from "../../hooks/useErrors";

import { Form, ButtonContainer } from "./styles";

interface ProductFormProps {
  onSubmit: (formData: Product) => void;
  onRemove?: (id: string) => void;
  title: string;
  data?: Product;
}

export function ProductForm({
  onSubmit,
  onRemove,
  title,
  data,
}: ProductFormProps) {
  const [name, setName] = useState(data?.name ?? "");
  const [code, setCode] = useState(data?.code ?? "");
  const [category, setCategory] = useState(data?.category ?? "");
  const [provider, setProvider] = useState(data?.provider ?? "");
  const [price, setPrice] = useState(data?.price ?? "");

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  const isFormValid =
    name && code && provider && category && price && errors.length === 0;

  function handleCodeChange(event) {
    setCode(event.target.value);

    if (!event.target.value) {
      setError({ field: "code", message: "Código é obrigatório" });
    } else {
      removeError("code");
    }
  }

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: "name", message: "Nome é obrigatório" });
    } else {
      removeError("name");
    }
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);

    if (!event.target.value) {
      setError({ field: "category", message: "Categoria é obrigatória" });
    } else {
      removeError("category");
    }
  }

  function handleProviderChange(event) {
    setProvider(event.target.value);

    if (!event.target.value) {
      setError({ field: "provider", message: "Fornecedor é obrigatório" });
    } else {
      removeError("provider");
    }
  }

  function handlePriceChange(event) {
    setPrice(event.target.value);

    if (!event.target.value) {
      setError({ field: "price", message: "Preço é obrigatório" });
    } else {
      removeError("price");
    }
  }

  function handleSubmit() {
    onSubmit({ name, code, category, provider, price });
  }

  return (
    <Form>
      <div className="title-container">
        <h1>{title}</h1>
      </div>

      <FormGroup error={getErrorMessageByFieldName("code")}>
        <span>Código</span>
        <Input
          type="number"
          value={code}
          onChange={handleCodeChange}
          error={getErrorMessageByFieldName("code")}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName("name")}>
        <span>Nome do produto</span>
        <Input
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName("name")}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName("category")}>
        <span>Categoria</span>
        <Select value={category} onChange={handleCategoryChange}>
          <option value="">Sem categoria</option>
          <option value="eletrônicos">Eletrônicos</option>
          <option value="eletrodomésticos">Eletrodomésticos</option>
        </Select>
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName("provider")}>
        <span>Fornecedor</span>
        <Select value={provider} onChange={handleProviderChange}>
          <option value="">Sem fornecedor</option>
          <option value="kabum">Kabum</option>
          <option value="americanas">Americanas</option>
        </Select>
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName("price")}>
        <span>Preço</span>
        <Input
          value={price}
          onChange={handlePriceChange}
          error={getErrorMessageByFieldName("price")}
        />
      </FormGroup>

      <ButtonContainer>
        <Button type="button" onClick={handleSubmit} disabled={!isFormValid}>
          {title}
        </Button>

        {!!data && onRemove && (
          <Button type="button" onClick={() => onRemove(data.code)}>
            Remover
          </Button>
        )}
      </ButtonContainer>
    </Form>
  );
}
