import express from "express";
import conectaDatabase from "./config/dbconect.js";
import livro from "./models/Livro.js"

const conexao = await conectaDatabase();

conexao.on("error", (erro) => {
      console.error("erro de conexao", erro);
});

conexao.once("open", () => {
      console.log("conexao banco sucesso!")
})

const app = express();
app.use(express.json()); //midleware ter acesso aos objetos

app.get("/", (req, res) => {
      res.status(200).send("Olá, você está acessando a página principal");
})


app.get("/livros/:id", async (req, res) => {

      // const listaLivros = await livro.findById({});
      // res.status(200).json(listaLivros);

      const getByIdLivro = buscaLivro(req.params.id)
      res.status(200).json(livros[getByIdLivro]);
})

app.put("/livros/edit/:id", (req, res) => {
      const getByIdLivro = buscaLivro(req.params.id)
      livros[getByIdLivro].titulo = req.body.titulo
      res.status(200).json(livros);
})

app.post("/livros-create", (req, res) => {
      livros.push(req.body); // express vai pegar o corpo dessa requisição
      res.status(201).send("Livro criado com sucesso!");
})

app.delete("/livros/delete/:id", (req, res) => {
      const getByIdLivro = buscaLivro(req.params.id);
      livros.splice(getByIdLivro, 1);
      res.status(200).send("Livro excluido com sucesso!");
})


export default app;

