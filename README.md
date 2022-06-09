## Como funciona a aplicação:
- A aplicação inicia na HomePage, onde você tem a opção de ir para a página de Login ou retornar para a Página Inicial da Jamestip.

- Na página de login simulei um login de usuário sem o uso de api, utilizando somente o yup.
    ### Usuários:
    - Email: teste@gmail.com
    - Senha: 123456
    

- Após eftuar o Login o usuário é redirecionado para a página de Dashboard onde ele encontra seus produtos cadastrados e tem o botão que redireciona para a página de cadastro de produtos.

- Na página de cadastrar produtos você pode inserir todas as informações para realizar o cadastro, uma notificação é mostrada caso o cadastro tenha sido realizado e esse produto é passado para o local storage.

- Com produtos cadastrados, você consegue visualizá-los no DashBoard e deletar ou editá-los pelos dois botões que estão em cada Card de produto.

- Além disso simulei um token para o login, sempre que você tenta acessar a página de login e esse token existe, você já é redirecionado para o DashBoard;

## Tecnologias Utilizadas:
  
- React.js.
- react-router-dom@6 para fazer as rotas da minha aplicação.
- styled-components para estilização de todas as páginas e componentes da aplicação.
- hookform, yup e yup resolver para fazer a validação de campos dos formulários de login e cadastro de produtos
- toastify para notificar o usuário se o login foi realizado ou se o produto foi cadastrado corretamente.
- Material-Ui para facilitar a utilização de ícones e do modal de edição de produto    

## Decisões adotadas:

- No início decidi criar uma página de login, pensando que faz mais sentido para o usuário final. 
- Depois disso fiz a criação de todas as pastas e arquivos que achei que seriam necessárias para a aplicação.
- Com isso feito implementei o Provider com Context Api que iria precisar para armazenar os produtos.
- Após isso começei a fazer as páginas Home, Login, DashBoard e RegisterProducts. Fiz a estilização e as funcionalidades juntas.
-Por fim fiz alguns teste como Usuário e corrigi alguns bugs.