Documentação da API
Tabela de Conteúdos

    Visão Geral
    Diagrama ER
    Início Rápido
        Instalando Dependências
        Variáveis de Ambiente
        Migrations
    Autenticação
    Endpoints

1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

    NodeJS
    Express
    TypeScript
    PostgreSQL
    TypeORM
    Yup

A URL base da aplicação: http://suaapi.com/v1
2. Diagrama ER

Voltar para o topo

Diagrama ER da API definindo bem as relações entre as tabelas do banco de dados.

DER
3. Início Rápido

Voltar para o topo
3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

yarn

3.2. Variáveis de Ambiente

Em seguida, crie um arquivo .env, copiando o formato do arquivo .env.example:

cp .env.example .env

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.
3.3. Migrations

Execute as migrations com o comando:

yarn typeorm migration:run -d src/data-source.ts

4. Autenticação

Voltar para o topo

Por enquanto, não foi implementada autenticação.
5. Endpoints
