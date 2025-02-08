import { autor } from "../models/Autor.js";

class AutorController {
      static async listarAutores(req, res) {
            try {
                  const listarAutores = await autor.find({});
                  res.status(200).json({ message: "Autores consultados com sucesso!", autores: listarAutores });
            } catch (error) {
                  res.status(500).json({ message: `Falha ao buscar autores: ${error.message}` });
            }
      }

      static async listarAutorById(req, res) {

            try {
                  const { id } = req.params
                  const listAutorId = await autor.findById(id);
                  res.status(200).json({ message: "Autor consultado com sucesso!", autor: listAutorId });
            } catch (error) {
                  res.status(500).json({ message: `Falha ao buscar autor: ${error.message}` })
            }

      }

      static async criarAutor(req, res) {
            try {
                  const postAutor = await autor.create(req.body);
                  res.status(201).json({ message: "Autor cadastrado com sucesso!", autor: postAutor });
            } catch (error) {
                  res.status(500).json({ message: `Falha ao cadastrar autor: ${error.message}` })

            }
      }

      static async atualizarAutor(req, res) {
            try {
                  const { id } = req.params
                  const editAutor = await autor.findByIdAndUpdate(id, req.body);
                  res.status(200).json({ message: "Autor editado com sucesso!", autor: editAutor });
            } catch (error) {
                  res.status(500).json({ message: `Falha ao editar autor: ${error.message}` })
            }
      }

      static async deletarAutor(req, res) {
            try {
                  const { id } = req.params;
                  const deleteAutor = await autor.findByIdAndDelete(id);
                  res.status(200).json({ message: "Autor deletado com sucesso!", autor: deleteAutor });
            } catch (error) {
                  res.status(500).json({ message: `Falha ao excluir autor: ${error.message}` })
            }
      }

}

export default AutorController;
