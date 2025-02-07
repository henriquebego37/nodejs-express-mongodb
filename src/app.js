import express from "express";
import conectaDatabase from "./config/dbconect.js";
import routes from "./routes/index.js";

const conexao = await conectaDatabase();

conexao.on("error", (erro) => {
      console.error("erro de conexao", erro);
});

conexao.once("open", () => {
      console.log("conexao banco sucesso!")
})

const app = express();
routes(app);


export default app;

