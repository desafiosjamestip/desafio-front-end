import { Container, Div } from "./style";

const Modal = ({ open, children }: any) => {
  return !open ? null : (
    <Container>
      <Div>{children}</Div>
    </Container>
  );
};

export default Modal;
