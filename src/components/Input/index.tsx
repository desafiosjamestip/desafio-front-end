import { InputGlobal } from "../../interfaces/inputInterfaces";

const Input = ({
  register,
  name,
  type,
  placeholder,
  label,
  readonly,
  ...rest
}: InputGlobal) => {
  return (
    <>
      <label>{label}</label>
      <input
        {...rest}
        {...register(name)}
        placeholder={placeholder}
        readOnly={readonly}
      />
    </>
  );
};

export default Input;
