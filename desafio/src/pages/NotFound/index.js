import { Wrapper } from './styles'

export default function NotFound() {
  return (
    <Wrapper>
      <span>Ops! Parece que essa página não existe...</span>
      <span>
        Clique
        {' '}
        <a href="/">aqui </a>
        e volte para a página principal
      </span>
    </Wrapper>
  )
}
