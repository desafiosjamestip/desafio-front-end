# JamesTip test - Bruno Tetzner :boom:

## :hammer: Tecnologias utilizadas :wrench:

- HTML
- Css
- TypeScript
- React
- Styled components
- Chakra-ui
- React-icons
- React router dom
- Yup
- React hook form

## Funcionamento da aplicação :steam_locomotive:

Essa plataforma tem como objetivo armazenar os produtos de
seu usuário, e permitir ao mesmo editar, excluir e fazer pesquisas por nome ou pelo código do produto.

### Fluxo da aplicação :arrows_counterclockwise:

#### Tela inicial :large_blue_circle:

Após abrir o website em seu navegador, o usuário ira se deparar com a tela inicial da aplicação, que lhe fornece duas opções,
ir para a pagína de cadastro para registrar novos produtos. ou ir para pagína de produtos onde estão todos os seus produtos cadastrados
até o momento.

#### Cadastro de produtos :pencil2:

A pagína de cadastro de produtos é onde o usuário pode cadastrar seus produtos, para isso ele deve preencher todos os campos e clicar no botão "Cadastrar".

Atenção: É necessário preencher todos os campos. Caso contrário será retornada uma mensagem de erro.

Campos requeridos:

- Nome do produto
- Preço do produto
- Fornecedor do produto
- Categoria do produto
- Código do produto

Se tudo correr bem, será retornada uma mensagem dizendo que o produto foi cadastrado.
Para visualizar seus produtos ou voltar ao menu inicial, basta usar o menu de navegação no topo da página

#### Paǵina de produtos :white_square_button:

Nessa pagína são renderizados todos os produtos do usuário, todos eles dispostos em cards. É possivel pesquisar por produtos especificos usando a barra de pesquisa. A Barra permite que você procure por nome ou pelo código do produto.

Cada card tem um icone no formato de um lapis e outro no formato de lixeira no canto inferior direito. O lapis serve para editar o produto daquela card. Após clicado, a pagína ira abrir um modal com um formulário semelhante ao da pagína de cadastro onde o usuário podera atualizar as informações. No entanto, dessa vez todas as informações são opcionais, com excessão do preço.

Já a lixeira exclui produtos, como já dito. Após clicar nela, sera aberto um modal perguntando se o usuário realmente deseja excluir o produto.

## Mais sobre as tecnologias escolhidas :triangular_flag_on_post:

#### :o: React

O React é um dos frameworks javascript mais utilizados da atualidade, muito util por sua capacidade de organizar e reutilizar blocos de código varias e varias vezes, isso fez toda a diferença na elaboração e organização do código desse projeto.

#### :o: Styled components

Uma das bibliotecas de estilização mais comuns no React. Permite criar componentes estilizados de maneira simples e prática, criando um código com HTML e CSS isolados, mantendo-o mais organizado, essa foi uma das principais razões para sua escolha. Quase toda estilização desse projeto foi feita usando styled-components.

#### :o: Chakra.ui

Também uma biblioteca muito utilizada com react, com soluções muito interessantes e práticas para estilização de websites. Apesar da maior parte da aplicação ser construida com styled componentes, o Chakra foi utilizado na criação dos modais de edição e exclusão de produtos. Essa escolha se deu devido a praticidade que essa biblioteca tem quando se trata da construção de modais,uma vez que construir modais com HTML e CSS puro pode não ser uma experiência muito agradavel. Essa escolha poupou muito tempo de desenvolvimento e linhas de código. Outro ponto que o chakra contribuiu muito foi na parte de feedbacks para o usuário. Com ele foi possivel gerar toasts(cards flutuantes que surgem temporariamente na tela para passar alguma informação para o usuário), que foram muito uteis para passar feedbacks de sucesso ou de falha na aplicação para o usuário.

#### :o: Yup e react-hook-form

Amplamente empregadas para construção e validação de dados de formulários de maneira simples. mas completa e eficiênte. E nessa aplicação não foi diferente. Essas bibliotecas foram utilizadas no formulário de criação e edição de produtos. É muito mais simples validar os campos de um formulário e retornar feedbacks para o usuário caso ele preencha alguma informação de maneira incorreta, quando se usa essas bibiotecas.

# Extras :boom:

- [figma da aplicação](https://www.figma.com/file/1S6TAjHGxcyML6HgoqPcaV/jamestip-test?node-id=5%3A310)
