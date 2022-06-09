import { ButtonHTMLAttributes, ReactNode } from "react";
import Styled from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  id: string;
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  id,
  children,
  onClick,
  disabled=false,
  ...rest
}) => {
  return (
    <Styled.Button
      id={id}
      onClick={() => {
        onClick();
      }}
      disabled={disabled}
      {...rest}
    >
     {children}
    </Styled.Button>
  );
};

export default Button;
