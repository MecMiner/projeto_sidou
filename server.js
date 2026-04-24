import express from "express"
import Database from "./database.js"
const app = express()
app.use(express.json())

const db = new Database()

let obj = {nome: "Teste", idade: 12}
let obj2 = {nome: "Teste", idade: 12}
let tabela = [obj, obj2]

// /pessoas
// /pedidos
// /produtos

// instagram.com/jefersoncs
// instagram.com/pearljam

// facebook.com/perfil/jeferson
// facebook.com/perfil/carlos


// Query parametros
    // ? Feitos para passar informações que não necessitam de segurança
// Route parametros
    //Páginas dinâmicas
    
// JSON -> Informações seguras

//https://mail.google.com/mail/u/4/?ogbl#inbox
// nome=alice&idade=18

app.get("/:tabela/:id", (req, res) => {
    const {id, tabela} = req.params
    res.json(db.buscarItem(tabela, id))
})
app.get('/:tabela', (req, res) => {
   const {tabela} = req.params
   res.json(db.buscar(tabela))
})

app.post('/:tabela', (req, res) => {
    const {tabela} = req.params
    const resposta = db.adicionar(tabela,req.body)
    res.end(resposta)
})

app.put("/:tabela/:id", (req, res) => {
    const {id, tabela} = req.params
    const response = db.alterar(tabela, id, req.body)
    res.end(response)
})

app.delete("/:tabela/:id", (req, res) => {
    const {id, tabela} = req.params
    const resposta = db.deletar(tabela, id)
    res.send(resposta)
})

app.listen(3000, ()=> {
    console.log("Servidor Rodando na porta 3000")
})