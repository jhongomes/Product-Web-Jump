<br>

# 📜 Projeto

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

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" height="75" width="100" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"  height="60" width="100" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height="70" width="100" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" height="60" width="100" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" height="50" width="100" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height="70" /> 

</p>




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