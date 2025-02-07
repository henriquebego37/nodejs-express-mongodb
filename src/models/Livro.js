import mongoose from "mongoose";

const mongooseType = mongoose.Schema.Types

const livroSchema = new mongoose.Schema({
      id: { type: mongooseType.ObjectId, },
      titulo: { type: mongooseType.String, required: true },
      editora: { type: mongooseType.String },
      preco: { type: mongooseType.String },
      paginas: { type: mongooseType.String }
}, { versionKey: false }) // versionKey = não quero versionar nosso schema

const livro = mongoose.model("livros", livroSchema) // modelo é um objeto que representa uma coleção

export default livro;