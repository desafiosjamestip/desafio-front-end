import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { Input, InputPassword } from "../Input";
import { UserAuthData } from "../../types/AuthUser";
import { useAuthLogin } from "../../providers/Auth";
import { FormContainer } from "./styles";

/*
Função que retora o formulário que aparece na page de logim.

Tem um validador de regex (regex da senha alpha numérica), pois já tive problemas com
regex em typescript, então resolvi sempre deixar esse validador
*/

export const FormUserLogin = () => {
  const { userLogin } = useAuthLogin();
  const history = useHistory();

  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  const validator = new RegExp(regex);

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Senha deve ter no mínimo 6 digitos")
      .required("Campo obrigatório")
      .matches(
        validator,
        "Senha deve ter pelo menos um caracter minúsculo, um maiúsculo, um número e um caracter especial"
      ),
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
  onSubmitFunction - enviar os dados do form de login para o provider Auth
  */

  const onSubmitFunction = (data: UserAuthData) => {
    userLogin(data, history);
    reset();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>
          Faça seu <span className="login">Login</span>
        </h2>
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
        <button className="button" type="submit">
          Entrar
        </button>
        <Link to="/register" className="account">
          <h5>Não possui conta?</h5>
        </Link>
      </form>
    </FormContainer>
  );
};
