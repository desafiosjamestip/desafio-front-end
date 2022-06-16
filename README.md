# Como Instalar Localmente

Primeiro, clone o repositorio e acesse a raiz do projeto.

Instale as dependencias

Primeiro, clone o repositorio e acesse a raiz do projeto.

    git clone git@github.com:desafiosjamestip/desafio-front-end.git

Instale as dependencias

    yarn

Depois, inicie o projeto no localhost paraa poder utilizar as funcionalidades do projeto.

    yarn start

# Front-End

O projeto foi implementado com react.js, e o css utiliza a biblioteca styled-components.

Projeto Responsivo.

Qualquer produto criado, editado ou excluido ira atualizar o localStorage.

Na pagina inicial contem a listagem dos produtos cadastrados, alem do botao para ir até a paginaa de cadastro.

dentro do card de cada produto contem as informações do produto, junto a imagem, e dois botoes sendo eles o de exclusão do item e de edição do item.

<img src="[HomePage.png](https://postimg.cc/XB5twsBk)"/>

# Cadastro do produto

Na pagina de cadastro encontra-se o formulrio de cadastro, onde sera cadastrado todas as informações do produto, sendo eles: imagem, codigo, categoria, nome, fornecedor, valor e logicamente um botao para cadaastrar após todos os inputs preenchidos.

<img src="[Pagina-Cadatro.png](https://postimg.cc/TLFZLz1P)"/>

Ao criar o produto é gerado um id automatico atravez do framework UUID, o qual é utilizado na hora de excluir fazendo com que o unico produto excluido seja o que o admnistrador exclua apenas o item que ele clicar.

<img src=""/>

# Edição do produto

Da mesma forma que a exclusão, o produto é selecionado pelo ID, podendo ser editado. Ao clicar em editar o item ja esta trazendo as informações do produto nos inputs, assim pe só ver qual informação deseja modificar e confirmar.

<img src="[Pagina-Update.png](https://postimg.cc/Fd7MKr9q)"/>
