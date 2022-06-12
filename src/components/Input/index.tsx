import { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { InputDiv } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error: string;
  name: string;
  register: UseFormRegister<FieldValues>;
}

const Input = ({ label, type, error, name, register, ...rest }: InputProps) => {
  return (
    <InputDiv>
      {label && <label>{label}</label>}
      <input {...register(name)} {...rest} />
      {!!error && (
        <div className="error">
          <span>{error}</span>
        </div>
      )}
    </InputDiv>
  );
};

export default Input;
