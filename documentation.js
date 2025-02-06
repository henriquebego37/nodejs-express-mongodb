// No arquivo server.js:

// Importe o módulo http.
// Defina uma constante PORT com o valor 3000.
// Crie um servidor HTTP utilizando a função createServer.
// Dentro da função de callback de createServer, defina as variáveis req e res.
// Escreva o cabeçalho da resposta utilizando o método writeHead de res. O status deve ser 200 e o tipo de conteúdo deve ser text/plain.
// Termine a resposta utilizando o método end de res. O conteúdo deve ser "Curso de Node.js".
// No final do arquivo, chame o método listen de server passando a constante PORT como argumento e uma função de callback que imprime servidor escutando! no console.


// server raiz!

// import http from "http";

// const PORT = 8000;

// const rotas = {
//       "/": "curso de node.js",
//       "/livros": "entrei na rota livros"
// };

// const server = http.createServer((req, res) => { // criando o servidor
//       res.writeHead(200, { "Content-Type": "text/plain" }) // cabeçalho de uma requisição
//       res.end(rotas[req.url])
// });

// server.listen(PORT, () => { // evento que monitora o servidor. 
//       console.log(`server running in port => ${PORT}`)
// });
