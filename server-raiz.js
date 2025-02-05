import http from "http";

const PORT = 8000;

const rotas = {
      "/": "curso de node.js",
      "/livros": "entrei na rota livros"
};

const server = http.createServer((req, res) => { // criando o servidor
      res.writeHead(200, { "Content-Type": "text/plain" }) // cabeçalho de uma requisição
      res.end(rotas[req.url])
});

server.listen(PORT, () => { // evento que monitora o servidor. 
      console.log(`server running in port => ${PORT}`)
});


