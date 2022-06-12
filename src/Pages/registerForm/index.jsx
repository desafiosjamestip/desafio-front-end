import { AnimationContainer, Container, Content } from "./style";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Input } from "style-components";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../Components/Button";

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
    .max(18, "Insira no máximo 18 caracteres")
    .required("Insira o Nome do Produto"),

  fornecedor: yup
    .string()
    .max(18, "Insira no máximo 18 caracteres")
    .required("Insira o Fornecedor do Produto"),

  valor: yup
    .number()
    .max(18, "Insira no máximo 18 caracteres")
    .required("Insira o Valor do Produto"),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  console.log(errors);

  const history = useHistory();

  const toHome = () => {
    history.push("/");
  };

  const onSubmitFunction = ({ codigo, categoria, nome, fornecedor, valor }) => {
    const product = { codigo, categoria, nome, fornecedor, valor };

    console.log(product);
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              register={register}
              name="codigo"
              label="Codigo do produto"
              placeholder="Codigo do produto"
              error={errors.codigo?.message}
            />

            <Input
              register={register}
              name="categoria"
              label="Categoria do produto"
              placeholder="Categoria do produto"
              error={errors.categoria?.message}
            />

            <Input
              register={register}
              name="nome"
              label="Nome do produto"
              placeholder="Nome do produto"
              error={errors.nome?.message}
            />

            <Input
              register={register}
              name="fornecedor"
              label="Nome do Fornecedor"
              placeholder="Nome do Fornecedor"
              error={errors.fornecedor?.message}
            />

            <Input
              register={register}
              name="valor"
              label="Valor do Produto"
              placeholder="Valor do Produto"
              error={errors.valor?.message}
            />

            <Button
              type={"submit"}
              width={"200px"}
              children={"Cadastrar"}
              bgcolor={"#6EC1E4"}
            />
            <p>
              <Button className="buttonHome" onClick={toHome}>
                Visualizar Produtos
              </Button>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default RegisterForm;
