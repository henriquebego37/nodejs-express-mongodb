import livro from "../models/Livro.js";

class LivroController {

      // * method: GET

      // buscar livros
      static async listarLivros(req, res) {
            try {
                  const listaLivros = await livro.find({});
                  res.status(201).json({ message: "Livros consultados com sucesso!", livros: listaLivros })
            } catch (err) {
                  console.log(erro)
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
            try {
                  const criarLivros = await livro.create(req.body)
                  res.status(201).json({ message: "Livro cadastrado com sucesso!", livro: criarLivros })
            } catch (err) {
                  console.log(err)
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