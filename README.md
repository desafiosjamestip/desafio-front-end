# Front-End

O projeto foi implementado com react.js, e o css utiliza a biblioteca styled-components.

Projeto Responsivo.

Qualquer produto criado, editado ou excluido ira atualizar o localStorage.

Na pagina inicial contem a listagem dos produtos cadastrados, alem do botao para ir até a paginaa de cadastro.

dentro do card de cada produto contem as informações do produto, junto a imagem, e dois botoes sendo eles o de exclusão do item e de edição do item.

<img src="/src/assets/image/Pagina%20inicial.png"/>

# Cadastro do produto

Na pagina de cadastro encontra-se o formulrio de cadastro, onde sera cadastrado todas as informações do produto, sendo eles: imagem, codigo, categoria, nome, fornecedor, valor e logicamente um botao para cadaastrar após todos os inputs preenchidos.

# FOTO PAGINA DE CADASTRO.

<img src="/src/assets/image/Pagina%20de%20cadastro.png"/>

Ao criar o produto é gerado um id automatico atravez do framework UUID, o qual é utilizado na hora de excluir fazendo com que o unico produto excluido seja o que o admnistrador exclua apenas o item que ele clikar.

<img src="/src/assets/image/Paagina%20inicial%20-%20excluir.png"/>

# Edição do produto

Da mesma forma que a exclusão, o produto é selecionado pelo ID, podendo ser editado substituir o produto na lista de produtos.
