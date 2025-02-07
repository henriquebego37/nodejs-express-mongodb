import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);

routes.get("/livros/:id", LivroController.listarLivroById);

routes.post("/livros/create", LivroController.criarLivros);

routes.put("/livros/edit/:id", LivroController.atualizarLivro);

routes.delete("/livros/delete/:id", LivroController.deletarLivro);

export default routes;
