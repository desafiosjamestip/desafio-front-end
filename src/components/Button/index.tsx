import { Container } from "./style";

const Button = ({ children, backgroundColor = "#00d0b3", ...rest }: any) => {
  return (
    <Container backgroundColor={backgroundColor} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
