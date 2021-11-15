import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { Input, InputPassword } from "../Input";
import { FormContainer, InputHidden } from "./styles";
import { useRegisterUser } from "../../providers/UserRegisterProvider";
import { UserRegisterData } from "../../types/RegisterUser";
import { useProducts } from "../../providers/Products";
import { useEffect } from "react";

/*
Função que retora o Formulário que aparece na page Register (cadastro de usuários)

Por facilidade deixei como "automático" (em um campo oculto abaixo do botão de submit) 
o incremento do id, através do length do state dos produtos (sim, parece estranho), 
pois a minha api é fake e tem sérias limitações.

Caso não tivesse o id incrementado automáticamente, o usuário correria o risco, no ato do cadastro,
de ter que ir tentando usar um id livre...

Tem um validador de regex (regex da senha alpha numérica), pois já tive problemas com
regex em typescript, então resolvi sempre deixar esse validador
*/

export const FormUserRegister = () => {
  const { userRegister } = useRegisterUser();
  const { store, loadStore } = useProducts();
  const history = useHistory();

  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  const validator = new RegExp(regex);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Senha deve ter no mínimo 6 digitos")
      .required("Campo obrigatório")
      .matches(
        validator,
        "Senha deve ter pelo menos um caracter minúsculo, um maiúsculo, um número e um caracter especial"
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senha errada")
      .required("Campo obrigatório"),
    id: yup.number(),
  });

  /*
  O useEffect abaixo tem a finalidade de atualizar o state de produtos (store) para fazer o 
  incremento do id com base no length dos produtos.
  */

  useEffect(() => {
    loadStore();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /*
  onSubmitFunction - envia os dados do form de register para o provider UserRegisterProvider
  */

  const onSubmitFunction = (data: UserRegisterData) => {
    console.log(store);
    userRegister(data, history);
    reset();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>
          Cadastro <span className="register">Usuário</span>
        </h2>
        <Input
          type="text"
          placeholder="Nome"
          register={register}
          name="name"
          error={errors.name?.message}
        />
        <Input
          type="email"
          placeholder="Email"
          register={register}
          name="email"
          error={errors.email?.message}
        />
        <InputPassword
          type="password"
          placeholder="Senha"
          register={register}
          name="password"
          error={errors.password?.message}
        />
        <InputPassword
          type="password"
          placeholder="Confirmar senha"
          register={register}
          name="passwordConfirm"
          error={errors.passwordConfirm?.message}
        />
        <button className="button" type="submit">
          Enviar
        </button>
        <Link to="/login" className="account">
          <h5>Já tenho conta</h5>
        </Link>
        <InputHidden className="hiddenId">
          <Input
            type="number"
            placeholder="id"
            register={register}
            name="id"
            value={store.length + 1}
            error={errors.passwordConfirm?.message}
          />
        </InputHidden>
      </form>
    </FormContainer>
  );
};
