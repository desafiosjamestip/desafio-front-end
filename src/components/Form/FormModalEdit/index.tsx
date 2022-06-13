import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../Input";
import Button from "../../Button";
import { Form } from "./style";

interface FormData {
  productCode: number;
  productCategory: string;
  productName: string;
  providerName: string;
  productValue: number;
}

export const FormModalEdit = ({ productsId, setProducts }: any) => {
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
    <>
      <Form onSubmit={handleSubmit(handleCreateProduct)}>
        <section>
          <Input
            type="text"
            id="productCode"
            placeholder="Editar código do produto"
            {...register("productCode")}
          />
          <Input
            type="text"
            id="productCategory"
            placeholder="Editar categoria do produto"
            {...register("productCategory")}
          />
          <Input
            type="text"
            id="productName"
            placeholder="Editar nome do produto"
            {...register("productName")}
          />
          <Input
            type="text"
            id="providerName"
            placeholder="Editar fornecedor do produto"
            {...register("providerName")}
          />
          <Input
            type="text"
            id="productValue"
            placeholder="Editar valor do produto"
            {...register("productValue")}
          />
        </section>
        <Button type="submit">Editar Produto</Button>
      </Form>
    </>
  );
};
