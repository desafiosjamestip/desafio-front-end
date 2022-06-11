import { CustomButton } from "./style"

const Button = ({children, ...rest}) =>{
    return(
        <CustomButton {...rest}>
            {children}
        </CustomButton>
    )
}

export default Button