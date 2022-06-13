import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Input from "../Input";
import { ContainerInput, FormItself } from "./style";
import * as yup from "yup";
import { useProduct } from "../../context/Products";

const Form = () => {
  const { addProduct } = useProduct();
  const history = useHistory();

  // Um esquema padrão utilizando yup.

  // Única coisa mais diferente nessa validação é um regex
  // para aceitar apenas números e virgula no campo "value"
  const schema = yup.object().shape({
    code: yup
      .string()
      .required("Código do produto obrigatório")
      .min(5, "código precisa ter 5 caracteres")
      .max(5, "máximo de 5 caracteres"),
    category: yup.string().required("Categoria do produto obrigatória"),
    productName: yup.string().required("Nome do produto obrigatório"),
    providerName: yup.string().required("Nome do fornecedor obrigatório"),
    value: yup
      .string()
      .required("Valor do produto obrigatório")
      .matches(/^[\d,]+$/, "Usar apenas vírgula para os centavos. ex: 2500,00"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  // função que recebe os dados digitados no input e envia para
  // a função "addProduct" localizada no context do projeto
  const onHandleSubmit = (data: any) => {
    addProduct(data);
    reset();
  };
  return (
    <FormItself onSubmit={handleSubmit(onHandleSubmit)}>
      <ContainerInput>
        <Input
          type="text"
          placeholder="Digite aqui"
          name="code"
          register={register}
          label="Código do produto"
        />
        {errors && <span className="error">{errors.code?.message}</span>}
      </ContainerInput>
      <ContainerInput>
        <Input
          type="text"
          placeholder="ex: eletrônico"
          name="category"
          register={register}
          label="Categoria do produto"
        />
        {errors && <span className="error">{errors.category?.message}</span>}
      </ContainerInput>
      <ContainerInput>
        <Input
          type="text"
          placeholder="Digite aqui"
          name="productName"
          register={register}
          label="Nome do produto"
        />
        {errors && <span className="error">{errors.productName?.message}</span>}
      </ContainerInput>
      <ContainerInput>
        <Input
          type="text"
          placeholder="Digite aqui"
          name="providerName"
          register={register}
          label="Nome do fornecedor"
        />
        {errors && (
          <span className="error">{errors.providerName?.message}</span>
        )}
      </ContainerInput>
      <ContainerInput>
        <Input
          type="text"
          placeholder="ex: 1500 ou 1500,00"
          name="value"
          register={register}
          label="Valor do produto"
        />
        {errors && <span className="error">{errors.value?.message}</span>}
      </ContainerInput>
      <button type="submit">Cadastrar</button>
      <button
        type="button"
        className="products"
        onClick={() => history.push("/products")}
      >
        Ver produtos
      </button>
    </FormItself>
  );
};

export default Form;
