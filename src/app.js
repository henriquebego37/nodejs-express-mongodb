import express from "express";
// import { Request, Response } from "express"

const app = express();
app.use(express.json()); //midleware ter acesso aos objetos

const livros = [
      {
            id: 1,
            titulo: "Moby Dick"
      },
      {
            id: 2,
            titulo: "Hobbit"
      }
]

function buscaLivro(id) {
      return livros.findIndex(livro => {
            return livro.id === Number(id);
      })
}

app.get("/livros", (req, res) => {
      // res.status(200).send({ "Livros buscados: ": livros })
      res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => { //
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

app.get("/", (req, res) => {
      res.status(200).send("Olá, você está acessando a página principal");
})

export default app; 