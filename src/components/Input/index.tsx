import { Container, InputContainer } from "./style";

const Input = ({ className, onClick, label, icon: Icon, ...rest }: any) => {
  return (
    <Container>
      <section className="container_input-label">{label}</section>

      <InputContainer className={className}>
        <input {...rest} />
      </InputContainer>
    </Container>
  );
};

export default Input;
