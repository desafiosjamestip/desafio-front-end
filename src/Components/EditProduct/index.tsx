import { useForms } from "../../Providers/Forms";
import { useEffect } from "react";
import { Input, Div } from "./style";
import Button from "@mui/material/Button";
import React from "react";

function EditProduct() {
  const { setCategory, setCode, setName, setProvider, setValue, editProduct } =
    useForms();

  return (
    <Div>
      <Input placeholder="Nome" onChange={(e) => setName(e.target.value)} />

      <Input
        type="number"
        placeholder="Código"
        onChange={(e) => setCode(Number(e.target.value))}
      />
      <Input
        placeholder="Categoria"
        onChange={(e) => setCategory(e.target.value)}
      />
      <Input
        placeholder="Provedor"
        onChange={(e) => setProvider(e.target.value)}
      />
      <Input
        placeholder="Valor"
        onChange={(e) => setValue(Number(e.target.value))}
      />

      <Button size="large" variant="outlined" onClick={() => editProduct()}>
        Editar
      </Button>
    </Div>
  );
}

export default EditProduct;
