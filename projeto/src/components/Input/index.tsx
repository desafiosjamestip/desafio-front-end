import { Container, InputContainer } from "./styles";
import Visibility from "../../assets/visibility.svg";
import VisibilityWhite from "../../assets/visibilityW.svg";
import Invisible from "../../assets/invisible.svg";
import InvisibleWhite from "../../assets/invisibleW.svg";
import { useState } from "react";

/*
Interface que valida as props do formulário
*/
interface InputProps {
  register: (name: string) => void;
  name: string;
  error: string;
  colorSchema?: boolean;
  type?: string;
  placeholder?: string;
  value?: string | number;
  className?: string;
  borderSchema?: boolean;
}

/*
Função que retorna os inputs utilizados em todos os formulários e seus props...
São 2 tipos de inputs: 1 para os campos de password, e outra para os demais campos
*/
export const Input = ({
  register,
  type,
  name,
  error = "",
  colorSchema = false,
  borderSchema = false,
  value,
  ...rest
}: InputProps) => {
  return (
    <Container>
      <InputContainer borderSchema={borderSchema} colorSchema={colorSchema}>
        <input {...register(name)} type={type} value={value} {...rest} />
      </InputContainer>
      <div className="inputErrors">{!!error && <span>{error}</span>}</div>
    </Container>
  );
};

export const InputPassword = ({
  register,
  type,
  name,
  error = "",
  colorSchema = false,
  ...rest
}: InputProps) => {
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <Container>
      <InputContainer colorSchema={colorSchema}>
        <input
          {...register(name)}
          type={passwordShown ? "text" : "password"}
          {...rest}
        />
        {colorSchema ? (
          <img
            src={passwordShown ? Invisible : Visibility}
            alt="password-visibility"
            onClick={togglePasswordVisiblity}
          />
        ) : (
          <img
            src={passwordShown ? InvisibleWhite : VisibilityWhite}
            alt="password-visibility"
            onClick={togglePasswordVisiblity}
          />
        )}
      </InputContainer>
      <div className="inputErrors">{!!error && <span>{error}</span>}</div>
    </Container>
  );
};
