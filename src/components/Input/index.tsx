import { InputHTMLAttributes } from "react";
import Styled from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  required: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  placeholder,
  value,
  required,
  ...rest
}) => {
  return (
    <Styled.Container>
      {label && (
        <Styled.Label htmlFor={id}>
          {label}
          {required && "*"}
        </Styled.Label>
      )}
      <Styled.Input
        id={id}
        value={value}
        placeholder={`${placeholder && required ? placeholder + " *" : ""}`}
        {...rest}
      />
    </Styled.Container>
  );
};
export default Input;
