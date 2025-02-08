import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autor", AutorController.listarAutores);
routes.get("/autor/:id", AutorController.listarAutorById);
routes.post("/autor/create", AutorController.criarAutor);
routes.put("/autor/edit/:id", AutorController.atualizarAutor);
routes.delete("/autor/delete/:id", AutorController.deletarAutor);

export default routes;
