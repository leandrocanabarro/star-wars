## Star Wars

<p align="center">
  <img alt="Star Wars" src="https://github.com/leandrocanabarro/star-wars/blob/master/screenshots/home-dark.png?raw=true"  width="800px"/>
</p>

## Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)

- ### Estilos de codificação
  - [EditorConfig](https://editorconfig.org/)
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)

## Extras

- ### Robô procura imagem ([Google Cloud | Api Custom Search](https://cloud.google.com))
  Este robô utiliza a API Custom Search da Google para filtrar as imagens da internet e montar um arquivo com os links para utilização no projeto, este arquivo está localizado em **src/robots/people.json**

  Antes de executar o robô, é necessário configurar as credenciais dentro do diretório **src/robots/images.js**.

  Para rodar o robô e buscar novas imagens dos personagens, execute:

  ```
  yarn robot
  ```

	* **googleapis**:  ^48.0.0
	* **slugify**:  ^1.4.0

- ### Web
	* **@testing-library/jest-dom**:  ^4.2.4
	* **@testing-library/react**:  ^9.3.2
	* **@testing-library/user-event**:  ^7.1.2
	* **axios**:  ^0.19.2
	* **polished**:  ^3.5.1
	* **prop-types**:  ^15.7.2
	* **react**:  ^16.13.1
	* **react-dom**:  ^16.13.1
	* **react-icons**:  ^3.9.0
	* **react-router-dom**:  ^5.1.2
	* **react-scripts**:  3.4.1",
	* **styled-components**:  ^5.0.1

### Navegando

Após clonar ou baixar o repositório instale as dependências necessárias utilizando o comando **yarn**.

```
yarn
```

Para iniciar e testar o projeto:

```
yarn start
```

Abra [http://localhost:3000](http://localhost:3000) no navegador de sua preferência para visualizar.
