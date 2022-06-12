# Desafio Front-End

## O que é?
Uma aplicação completa para gerenciamento de produtos, nesta aplicação é possivel criar, editar e excluir um produto e ainda criar ou uma excluir categorias de produtos.

## Introdução
Para o desenvolvimento eu ultilizei React com Typescript.
Para o gerenciamento de estados da aplicação foi ultilizado context-api.
Para a estilização foi ultilizada a biblioteca styled-components, a aplicação é totalmente responsiva.
Para a persistência de dados e o consumo deles eu optei por criar um back-end de desenvolvimento com a biblioteca json-server, para o consumo dos dados eu ultilizei uma api criada com a biblioteca axios, eu optei por fazer desta forma por achar que se assemelharia mais a um ambiente de produção e que tornaria a aplicação mais realista e até mesmo escalavel.
* ultilizando o endpoint http://localhost:3001/categories, é possivel criar novas categorias, listar categorias existentes e excluir.
* ultilizando o endpoint http://localhost:3001/products, é possivel criar novos produtos, listas produtos existentes e excluir produtos, IMPORTANTE: cada produto necesita de uma categoria para ser criado,então é importante que antes de criar um produto, pelo menos uma categoria tenha sido criada.

## Instalar e rodar
Para rodar a aplicação, basta seguir esse passo a passo:
* Abra o projeto dentro do seu editor de texto escolhdio, abra duas janelas do seu terminal, na primeira acesse a pasta back-end ultilizando o comando 'cd back-end', já dentro da pasta rode o comando npm start ou yarn start. Uma vez com o back-end iniciado, vá para o segundot terminal e acesse a pasta front-end ultilizando o comando 'cd front-end' e rode o comando npm start ou yarn start.
* Após seguir esse passo a passo, basta entrar no seu navegador e acessar a url http://localhost:3000, divirta-se!

Espero que gostem!