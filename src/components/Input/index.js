import { CustomInput, CustomLabel } from "./style";

const Input = ({label,errors,name,register, ...rest}) =>{
    return(
      <CustomLabel>
        <p>{label}</p>
        {errors && <span>{errors}</span>}
        <CustomInput errors={!!errors} {...register(name)} {...rest} />
      </CustomLabel>
    )
}

export default Input