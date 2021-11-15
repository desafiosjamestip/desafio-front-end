import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormContainer, InputHidden } from "./styles";
import { Input } from "../Input";
import { ProductsData } from "../../types/ProductsData";
import { useProducts } from "../../providers/Products";

/*
Função que retora o Formulário que aparece na page Dashboard (cadastro de produtos)

Por facilidade deixei como "automático" (em um campo oculto abaixo do botão de submit) 
o incremento do id, através do length do state dos produtos, 
pois a minha api é fake e tem sérias limitações.
*/

export const FormProducts = () => {
  const { registerProducts, store } = useProducts();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    provider: yup.string().required("Campo obrigatório"),
    price: yup
      .number()
      .typeError("Campo obrigatório")
      .required("Campo obrigatório")
      .min(1, "Valor mínimo 1,00 R$"),
    category: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /*
  onSubmitFunction - enviar os dados do form de login para o provider Products
  */

  const onSubmitFunction = (data: ProductsData) => {
    registerProducts(data);
    reset();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>
          Cadastro de <span>Produtos</span>
        </h2>
        <Input
          type="text"
          placeholder="Nome"
          register={register}
          name="name"
          error={errors.name?.message}
        />
        <Input
          type="text"
          placeholder="Categoria"
          register={register}
          name="category"
          error={errors.category?.message}
        />
        <Input
          type="number"
          placeholder="Preço"
          register={register}
          name="price"
          error={errors.price?.message}
        />
        <Input
          type="text"
          placeholder="Fornecedor"
          register={register}
          name="provider"
          error={errors.provider?.message}
        />
        <button className="button" type="submit">
          Cadastrar
        </button>
        <InputHidden>
          <Input
            register={register}
            name="id"
            value={store.length + 1}
            error={errors.code?.message}
          />
        </InputHidden>
      </form>
    </FormContainer>
  );
};
