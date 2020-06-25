Esse projeto foi inicializado com "create-react-app" e suas instruções originais se encontram no fim do arquivo.

Este projeto utiliza axios, react-redux, redux, socket.io-client e styled-components.

Para que o projeto funcione é necessário ter instalado o Node.js assim como o 'npm'. Ambos podem ser encontrados em https://nodejs.org/en/download/.

Instruções para utilização:

Após clonar o repositório, acesse a pasta raiz do projeto e rode:

### `npm install`

O npm irá instalar todos as dependencias necessárias.

Após a instalação das dependencias você deve abrir o arquivo 'api.js' encontrado em 'src/services/'. 

Na linha 3 altere o valor de 'ENDPOINT' para o valor da api responsavel por emitir/escutar os eventos do socket.io conforme proposto no problema.

Após esse passo você pode rodar na raiz do projeto: 

### `npm start`

Para rodar a aplicação em modo de desenvolvimento e ver ela no browser no endereço http://localhost:3000.

Para gerar os arquivos para produção rode na raiz do projeto o comando:

### `npm build`

Este comando irá gerar uma pasta chamada 'build' na raiz do projeto, está pasta contem todos os arquivos já minificados e otimizidos, pasta subir a pasta para o ambiente.

-- NOTAS DO DESENVOLVEDOR --
A problemática enviada não continha rotas para obter todos os usuários que já estão na sala quando algum novo usuário entra, logo ele não terá acesso aos usuários que entraram antes e estes não seram listados. Assim como, se um usuário antigo enviar uma menssagem não teremos por exemplo a sua imagem para exibir, visto que está vem apenas no evento de entrada do usuário na sala que aconteceu posteriormente, por tanto defini uma imagem padrão para usuários sem imagem. 

Não existe nenhum evento para registrar a saida de um usuário, logo se um usuário sair, este continuara nas listagens dos usuários que ainda estiverem no chat.

Quando ao projeto, utilizei redux de forma bem simples, visto que é uma aplicação bem pequena, não achei que valia a pena criar um arquivo com as 'Actions' por ser apenas 1 a ser utilizada.

Como não há persistencia dos dados, criei um HOC para proteger a rota do chat e redirecionar o usuário para não termos usuários sem nome na sala.

Agradeço pela oportunidade, e caso seja possível gostaria de receber um feedback, seja ele positivo ou negativo, para poder evulir como desenvolvedor.

Caso haja alguma dúvida meu contato é o guiga.bentiez@gmail.com

Abaixo seguem as instruções originais do create-react-app.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
