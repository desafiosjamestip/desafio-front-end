import { AnimationContainer, Container, Content, Form } from "./style";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../Components/Button";
import { VitrineContext } from "../../Providers/listProducts";
import { useContext } from "react";
import Input from "../../Components/Input";
import { ContainerHeader, H3 } from "../ProductsList/style";

const formSchema = yup.object().shape({
  codigo: yup
    .string()
    .max(18, "Insira no máximo 18 caracteres")
    .required("Insira o Codigo do Produto"),

  categoria: yup
    .string()
    .max(18, "Insira no máximo 18 caracteres")
    .required("Insira a Categoria do Produto"),

  nome: yup
    .string()
    .max(28, "Insira no máximo 28 caracteres")
    .required("Insira o Nome do Produto"),

  fornecedor: yup
    .string()
    .max(18, "Insira no máximo 18 caracteres")
    .required("Insira o Fornecedor do Produto"),

  valor: yup.number().required("Insira o Valor do Produto"),
});

const RegisterForm = () => {
  const { addProduct } = useContext(VitrineContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const history = useHistory();

  const toHome = () => {
    history.push("/");
  };

  const onSubmitFunction = ({
    img,
    codigo,
    categoria,
    nome,
    fornecedor,
    valor,
  }) => {
    const product = { img, codigo, categoria, nome, fornecedor, valor };

    console.log(product);
    addProduct(product);
  };

  return (
    <Container>
      <ContainerHeader>
        <H3>Cadastro de produtos</H3>
        <Button
          className="buttonHome"
          onClick={toHome}
          bgcolor={"#00d0b3"}
          height={"40px"}
          children={"Visualizar Produtos"}
        />
      </ContainerHeader>
      <Content>
        <AnimationContainer>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              register={register}
              name="img"
              placeholder="Link da imagem"
            />
            <Input
              register={register}
              name="codigo"
              placeholder="Codigo do produto"
              error={errors.codigo?.message}
            />

            <Input
              register={register}
              name="categoria"
              placeholder="Categoria do produto"
              error={errors.categoria?.message}
            />

            <Input
              register={register}
              name="nome"
              placeholder="Nome do produto"
              error={errors.nome?.message}
            />

            <Input
              register={register}
              name="fornecedor"
              placeholder="Nome do Fornecedor"
              error={errors.fornecedor?.message}
            />

            <Input
              register={register}
              name="valor"
              placeholder="Valor do Produto"
              error={errors.valor?.message}
            />

            <Button
              type={"submit"}
              width={"100%"}
              height={"40px"}
              children={"Cadastrar"}
              bgcolor={"#00d0b3"}
            />
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default RegisterForm;
