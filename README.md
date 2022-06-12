# Desafio Front-end

    Essa aplicação foi feita com as seguintes features:

## Formulário para cadastro de produtos

### Dados possiveis de cadastrar:

    - Código do produto : Dado único, obrigatório, caso tente cadastrar dois produtos com o mesmo codigo, a aplicação etourará um erro;
    - Categoria do produto: uma string obrigatoria, como Eletrônicos, Alimentos etc;
    - Nome do produto: Uma string obrigatória para nomear o produto sendo cadastrado;
    - Nome do fornecedor do produto: Uma string obrigatória, com o nome do fornecedor do produto;
    - Preço do produto: Um number, obrigdatório, para definir o preço do produto, aceita somente numeros (ex: 12, caso queira adicionar centavos: 12.5);
    - Cada uma das informações acima deve ser obrigatória, caso tente cadastrar um produto sem uma delas o formulário aponta um erro;

## Listagem de produtos:

#### - Para acessar os produtos que foram cadastrados com sucesso basta clicar no botão no canto superior direito onde voce será direcionado para a pagina onde os produtos são listados;

## Deleção do produto:

#### Cada produto quando criado possui um botão com o nome "Remover Produto", basta clicar nele que o produto desejado sera removido da lista de produtos;

## Edição de produtos:

#### Assim como a feature de exclusao, o de edição tambem é feito atraves de um botão presente em cada card de produto, onde quando clicado ele abre um modal com um formulário com os campos aonde deseja alterar alguma informação do produto.

### (OBS: A única informação do produto aonde nao será possivel alterar seria o código do produto, já que essa informação é unica, nao faria sentido ser alterada.)

## Ferramentas utilizadas no desenvolvimento do projeto:

    - React-router-dom: Utilizado para fazer a navegação entre as paginas de cadastor de produtos e a pagina onde os produtos sao listados;

    - React-hook-forms: Utilizado para poder otimizar o preencimento e a captura dos valores inseridos no formulário;

    - yup/yupResolvers: Utilizado para realizar verificaçoes como campos vazios ou valores inseridos incorretamente;

    - React-icons: Utilizado para fins visuais;

    - Context-Api: Utilizado para fornecer os states e funções necessarias para o funcionamento de componentes e paginas;

    - Toastify: Utilizado para criar um modal de sucesso e erro no Cadastro de produtos, na deleção de produtos e edição de produtos;

    - Styled-Components: Utilizado para adicionar os estilos da aplicação;

## Decisões tomadas durante o planejamento e desenvolvimento do projeto:

    -Estutura do provider: Decidi nao deixar muitas logicas nos componentes, afim de aproveitar o maximo do Context-Api, e facilitar na manutenção do codigo, ja que praticamente toda a logica estava na pasta providers;

    -Estutura de componentes e páginas: Decidi separar os compnentes para na hora de montar as paginas eu realizo somente a montagem das paginar com seus respectivos componentes, afim de melhorar a organização e otimizar o trabalho;

    -Oganização de interfaces: Separei a maior parte das interfaces e tipos em uma pasta chamada "@types" afim de melhorar a organização principalmente das inerfaces mais utilizadas;
