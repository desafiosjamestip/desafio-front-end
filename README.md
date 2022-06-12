# Desafio Jamestip

Olá, com muita satisfação entrego o projeto para participar do processo seletivo para a vaga de desenvolvedor Front-end.

## Funcionalidades

O projeto conta com funcionalidades relacionadas a criação, edição, listagem e remoção de produtos. Todas essas funcionalidades foram centralizadas no contexto de produtos.

Foi implementado o framework single-spa para:

- compartilhar estilos entre as aplicações
- compartilhar navbar entre as aplicações de produtos e home
- rodar diversas aplicações (com a possibilidade de utilizar diferentes libs/frameworks)

Para facilitar o gerenciamento dos projetos e instalação de dependências e execução de scripts foi adicionado a ferramenta Lerna.

## Rodando o projeto

- Baixe o projeto
- Instale as dependências
- Na raiz do projeto rode os comandos:
  `yarn bootstrap` e `yarn start`
- Acesse a URL: http://localhost:9000/

## Ferramentas

- React
- Styled components
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [Single-spa](https://single-spa.js.org/)
- [react-toastify](https://www.npmjs.com/package/react-toastify)
- [Lerna](https://github.com/lerna/lerna)
