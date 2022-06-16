import { Container } from "./style";

const Button = ({
  type,
  bgcolor,
  children,
  color,
  bdradius,
  width,
  height,
  onClick,
  hover,
  ...rest
}) => {
  return (
    <>
      <Container
        type={type}
        bgcolor={bgcolor}
        color={color}
        bdradius={bdradius}
        width={width}
        height={height}
        onClick={onClick}
        hover={hover}
        {...rest}
      >
        {children}
      </Container>
    </>
  );
};

export default Button;
