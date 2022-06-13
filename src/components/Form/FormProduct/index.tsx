import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../Input";
import Button from "../../Button";
import { Form } from "./style";
import { useState } from "react";

interface FormData {
  productCode: number;
  productCategory: string;
  productName: string;
  providerName: string;
  productValue: number;
}

export const FormProduct = () => {
  const [productData, setProductData] = useState("");

  const createProductSchema = yup.object().shape({
    productCode: yup.string(),
    productCategory: yup.string(),
    productName: yup.string(),
    providerName: yup.string(),
    productValue: yup.string(),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FormData>({ resolver: yupResolver(createProductSchema) });

  const handleCreateProduct = (data: FormData) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(handleCreateProduct)}>
      <section>
        <Input
          label="Código do Produto"
          type="text"
          id="productCode"
          placeholder="Digite aqui o código do produto"
          {...register("productCode")}
        />
        <Input
          label="Categoria"
          type="text"
          id="productCategory"
          placeholder="Digite aqui a categoria do produto"
          {...register("productCategory")}
        />
        <Input
          label="Nome"
          type="text"
          id="productName"
          placeholder="Digite aqui o nome do produto"
          {...register("productName")}
        />
        <Input
          label="Fornecedor"
          type="text"
          id="providerName"
          placeholder="Digite aqui o fornecedor do produto"
          {...register("providerName")}
        />
        <Input
          label="Valor"
          type="text"
          id="productValue"
          placeholder="Digite aqui o valor do produto"
          {...register("productValue")}
        />
      </section>
      <Button type="submit">Cadastrar Tecnologia</Button>
    </Form>
  );
};
