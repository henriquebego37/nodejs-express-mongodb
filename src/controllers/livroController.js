import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {

      // * method: GET

      // buscar livros
      static async listarLivros(req, res) {
            try {
                  const listaLivros = await livro.find({});
                  res.status(201).json({ message: "Livros consultados com sucesso!", livros: listaLivros })
            } catch (err) {
                  res.status(500).json({ message: `Falha ao buscar livros: ${erro.message}` })
            }

      }

      // buscar livros pelo :id
      static async listarLivroById(req, res) {
            try {
                  const idLivro = req.params.id
                  const listaLivroID = await livro.findById(idLivro);
                  res.status(200).json({ message: "Livro consultado com sucesso!", livro: listaLivroID })

            } catch (error) {
                  res.status(500).json({ message: `Não foi possível buscar o livro selecionado - ${error}` })
            }
      }

      // * method: POST

      // criar livros
      static async criarLivros(req, res) {
            const criarLivros = req.body;
            try {
                  const autorEncontrado = await autor.findById(criarLivros.autor);
                  const livroCompleto = { ...criarLivros, autor: { ...autorEncontrado._doc } };
                  const livroCriado = await livro.create(livroCompleto);
                  res.status(201).json({ message: "Livro cadastrado com sucesso!", livro: livroCriado })
            } catch (err) {
                  console.log(err)
                  res.status(500).json({ message: `Falha ao cadastrar o livro - ${err.message}` })
            }
      }

      static async listarLivroByEditor(req, res) {
            const editoraGet = req.query.editora;
            try {
                  const livrosPorEditora = await livro.find({ editora: editoraGet });
                  res.status(200).json({ message: "Livro buscado com sucesso!", livro: livrosPorEditora });
            } catch (error) {
                  res.status(500).json({ message: `Falha ao cadastrar o livro - ${err.message}` })
            }
      }

      // * method: PUT

      // atualizar livro
      static async atualizarLivro(req, res) {
            try {
                  const idLivro = req.params.id
                  const listaLivroID = await livro.findByIdAndUpdate(idLivro, req.body);
                  res.status(200).json({ message: "Livro atualizado com sucesso!", listaLivroID })

            } catch (error) {
                  res.status(500).json({ message: "Não foi possível atualizar o livro selecionado." })
            }
      }

      // * method: DELETE

      // deletar um livro
      static async deletarLivro(req, res) {
            try {
                  const idLivro = req.params.id
                  const deleteLivro = await livro.findByIdAndDelete(idLivro)
                  res.status(200).json({ message: "Livro excluido com sucesso!", deleteLivro })

            } catch (erro) {
                  res.status(500).json({ message: `Não foi possível excluir livro selecionado: ${erro.message}` })
            }
      }

};

export default LivroController;