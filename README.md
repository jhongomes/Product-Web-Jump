<br>
<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" height="75" width="100" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"  height="60" width="100" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height="70" width="100" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" height="60" width="100" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" height="50" width="100" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height="70" /> 

</p>

# 📜 PROJETO

 Product Web Jump é um crud challenge que permite cadastrar categorias e produtos. Com um relacionamento bidirecional, é possivel atribuir produtos a uma categoria, desenvolvida em um banco relacional `postgres` em um container `docker` 

## Categoria

**RF**

- Deve ser possível cadastrar uma categoria.
- Deve ser possível listar todas as categorias.
- Deve ser possível buscar uma única categoria por `id`.
- Deve ser possível alterar o  `name` de uma categoria.
- Deve ser possível excluir uma categoria.


**RN**

- Não deve ser possível cadastrar uma categoria com `name` existente.
- Não deve ser possível buscar uma categoria com `id` inválido.
- Não deve ser possível alterar o `name` já cadastrado no sistema.
- Não deve ser possível excluir uma categoria que não exista no sistema.
- Não deve ser possível excluir uma categoria que esteja sendo referenciada em um produto.

## Produto

**RF**

- Deve ser possível cadastrar um produto
- Deve ser possível listar todos os produtos.
- Deve ser possível buscar produto por `id`, `name`, `category_id`.
- Deve ser possível alterar o  `name` de um produto.
- Deve ser possível excluir um produto.
- Deve ser possível fazer upload de `image` do produto.

**RN**

- Não deve ser possível cadastrar um produto com `name` existente.
- Não deve ser possível alterar o `name` de um produto já cadastrado no sistema.
- Não deve ser possível excluir um produo que não exista no sistema.
- Não deve ser possível cadastrar um produto sem `category_id`.
- Não deve ser possível fazer upload de `image` do produto com o `id` inválido.

<br>

## 🔧  Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:


- [Nodejs](https://nodejs.org/en/)
- [Express](http://expressjs.com/pt-br/)
- [Typescript](https://docs.microsoft.com/pt-br/archive/msdn-magazine/2015/january/typescript-understanding-typescript)
- [TypeORM](https://typeorm.io/#/)
- [docker](https://docs.docker.com/)
- [Jest](https://jestjs.io)
- [VS Code](https://code.visualstudio.com/) com [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) e [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)



<br>

# 👷‍♂️ Arquitetura

Clean Architecture

# 🗳 Como baixar o projeto

⚠ É necessário possuir as seguintes ferramentas instaladas em seu computador:
- [Node.js](https://nodejs.org/en/). (Preferencialmente a versão 12.17.0 ou supeiror 15.4.0)
- [docker](https://docs.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)


⚠ Você pode usar tanto o [yarn](https://yarnpkg.com/) quanto o [npm]() para instalar as dependências.


<br/>

Clone o projeto para sua maquina local:
```bash
# Clone o projeto para sua maquina local
$ git clone https://github.com/jhongomes/Product-Web-Jump.git

# Acesse a pasta do projeto
$ cd Product-Web-Jump

# Instale todas as dependências do projeto
$ yarn 
ou
$ npm i

# Rode o comando para criar um database no docker
$ docker-compose up -d

# Rode o comando para subir as migrations no docker
$ yarn typeorm migration:run
ou
$ npm run typeorm migration:run

# Rode o projeto
$ yarn dev
ou
$ npm run dev
```
<br />

# Documentação
 A documentação pode ser acessada através: http://localhost:3333/api-docs quando o servidor local estiver ativo. 

![swagger](https://user-images.githubusercontent.com/57759255/149639431-266785dd-5ec2-452d-a531-07d01b36a81a.gif)

<br />


# Testes
[Jest](https://jestjs.io/) Foi utilizado para os testes, para rodá-los execute:
```
$ yarn test
```
Ou:
```
$ npm run test
```

<br />


<p align="center">Feito com 💜 by <a href="https://www.linkedin.com/in/jhonatan-gomes-de-souza-513a3a197?challengeId=AQFBHhiP4QdIHQAAAX3BFHIS5K2MDNtBpp5ivwl-velebU8gwQxxhLIz51nO-__MejbD6jfZvQdyKWzrLVGfHNChGYGu8GqyMA&submissionId=ebdd152b-6a1b-c116-99c3-2848b7bbe760" target="_blank">Jhonatan Gomes </a></p>