import {
  PageBody,
  PageForm,
  PageImg,
  Title,
  Input,
  Span,
  PageAdd,
  Select,
} from "./style";
import { Header } from "../../components/header";
import Image from "../../assets/images/sale2.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IProduct } from "../../intefaces/product";
import { Button } from "../../components/button";
import { useProducts } from "../../providers/productProvider";

const RegisterProductsPage = () => {
  const { postProduct } = useProducts();

  const registerSchema = yup.object().shape({
    productName: yup
      .string()
      .required("O nome do produto é obrigatório!")
      .max(50, "O nome do produto pode ter no maximo cinquenta caracteres"),

    productPrice: yup.number().required("O preço do produto é obrigátorio!"),

    productCategory: yup
      .string()
      .required("A categoria do produto é obrigátoria!"),
    productCode: yup
      .string()
      .required("O código do produto é obrigátorio!")
      .max(15, "O código do produto pode ter no máximo 15 caracteres"),
    productProvider: yup
      .string()
      .max(20, "O fornecedor pode ter no máximo 20 caracteres")
      .required("O fornecedor do produto é obrigátorio!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>({ resolver: yupResolver(registerSchema) });

  const onProductRegister = (product: IProduct) => {
    postProduct(product);
  };

  return (
    <>
      <Header />
      <PageBody>
        <PageAdd>
          <Title>Novo Produto</Title>
          <PageForm onSubmit={handleSubmit(onProductRegister)}>
            <Input
              id="1"
              {...register("productName")}
              placeholder="Nome do produto"
            />
            {errors && <Span>{errors.productName?.message}</Span>}
            <Input
              id="2"
              {...register("productPrice")}
              placeholder="Preço do produto"
            />
            {errors && <Span>{errors.productPrice?.message}</Span>}
            <Input
              id="3"
              {...register("productCode")}
              placeholder="Código do produto"
            />
            {errors && <Span>{errors.productCategory?.message}</Span>}
            <Select
              id="4"
              {...register("productCategory")}
              placeholder="Categoria do produto"
            >
              <option value={"Eletrônico"}>Eletrônico</option>
              <option value={"Alimento"}>Alimentos</option>
              <option value={"Construção"}>Construção</option>
              <option value={"Automoveis"}>automoveis</option>
              <option value={"Roupas"}>Roupas</option>
              <option value={"Material escolar"}>Material escolar</option>
              <option value={"Produtos agricolas"}>Produtos agricolas</option>
              <option value={"Petz"}>Petz</option>
            </Select>
            {errors && <Span>{errors.productCode?.message}</Span>}
            <Input
              id="4"
              {...register("productProvider")}
              placeholder="Fornecedor do produto"
            />
            {errors && <Span>{errors.productProvider?.message}</Span>}
            <Button text="Cadastrar" />
          </PageForm>
        </PageAdd>

        <PageImg src={Image} alt="Ilustration" />
      </PageBody>
    </>
  );
};

export { RegisterProductsPage };
