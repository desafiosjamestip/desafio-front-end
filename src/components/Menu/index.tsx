import { Container, Link } from './styles';

export function Menu() {
  return (
    <Container>
      <Link href="/">Home</Link>
      <Link href="/cadastro">Cadastrar</Link>
    </Container>
  );
}
