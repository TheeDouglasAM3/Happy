# HappyGuarulhos

<p align="center">
   <img src="./.github/logoHappy.png" alt="Happy" width="280"/>
</p>

<p align="center">	
   <a href="https://www.linkedin.com/in/douglas-alves-marcelino-704250180/">
      <img alt="Douglas Alves Marcelino" src="https://img.shields.io/badge/-Douglas%20Alves%20Marcelino-FFFB26?style=flat&logo=Linkedin&logoColor=white" />
   </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/TheeDouglasAM3/Happy?color=FFFB26">

  <a href="https://github.com/TheeDouglasAM3/Happy/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/TheeDouglasAM3/Happy?color=FFFB26">
  </a> 
  <img alt="License" src="https://img.shields.io/badge/license-MIT-FFFB26">
  <a href="https://github.com/TheeDouglasAM3/Happy/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/TheeDouglasAM3/Happy?color=FFFB26&logo=github">
  </a>
</p>

Projeto criado durante a semana Next Level Week #3 [@Rocketseat](https://github.com/Rocketseat), com o intuito de adquirir mais conhecimentos sobre as tecnologias ReactJS, NodeJS, Typescript e React Native.


# :star: Sumário

* [Descrição](#descrição)
* [Adicionais](#adicionais)
* [Demonstração da aplicação](#demonstração-da-aplicação) 
* [Tecnologias](#tecnologias)
* [Como rodar o projeto](#como-rodar-o-projeto)
* [Achou algum bug?](#problemas)
* [Licença](#licença)

# Descrição
O Happy é uma aplicação que conecta pessoas à casas de acolhimento institucional de Guarulhos SP para fazer o dia de muitas crianças mais feliz.

# Adicionais
* Campos de contatos ao cadastrar uma casa de acolhimento instucional
* Opção de dark mode

# Demonstração da aplicação
O projeto desenvolvido neste repositório está disponível em: 
[https://happy-guarulhos.vercel.app/](https://happy-guarulhos.vercel.app/)

# Tecnologias
Neste projeto foram utilizadas as seguintes tecnologias:
* [NodeJS](https://nodejs.org/en/)
* [React](https://pt-br.reactjs.org/)
* [React Native](https://facebook.github.io/react-native/)
* [Expo](https://expo.io/)
* [TypeScript](https://www.typescriptlang.org/)

# Como rodar o projeto
```bash
# Copie o repositório
$ git clone https://github.com/TheeDouglasAM3/Happy.git
```
### Rode o servidor (back-end)

```bash
# Vá para a pasta do servidor
$ cd Happy/server

# Instale as depedencias
$ npm install
ou
$ yarn install

# Executar uma instância de um banco de dados usando docker
$ docker run --name happy -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Criar um banco de dados com o nome happy
CREATE DATABASE happy

# Rode as migrações do banco de dados
$ npm run typeorm migration:run
ou
$ yarn typeorm migration:run

# Rode a aplicação
$ npm run dev
ou
$ yarn dev
```
Acesse o servidor em: http://localhost:3333/

### Rode o website (front-end)

```bash
# Vá para a pasta web
$ cd Happy/web

# Instale as depedencias
$ npm install
ou
$ yarn install

# Rode a aplicação
$ npm start
ou
$ yarn start
```
Acesse o website em: http://localhost:3000/

### Rode o aplicativo (mobile)

```bash
# Vá para a pasta web
$ cd Happy/web

# Instale as depedencias
$ npm install
ou
$ yarn install

# Rode a aplicação
$ npm start
ou
$ yarn start
```
Acesse o aplicativo lendo o QRcode disponibilizado pelo Expo 

# Problemas
Se você encontrou algum bug, se sinta livre **para criar uma nova issue**  [clicando aqui!](https://github.com/TheeDouglasAM3/Happy/issues). Se você já encontrou a solução para o problema, **faça um pull request**!

# Licença

Criado em 2020 

Feito com carinho por [Douglas Alves Marcelino](https://github.com/TheeDouglasAM3) :duck:

Esse projeto esta sobre [MIT license](./LICENSE).