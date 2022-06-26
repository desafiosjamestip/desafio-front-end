import { Container } from "./styles";

type ContainerProps = {
  children: React.ReactNode; // 👈️ type children
};

export const PageContainer = (props: ContainerProps) => {
  return <Container>{props.children}</Container>;
};
