import express from "express"
import Database from "./database.js"
const app = express()
app.use(express.json())

const db = new Database()

let obj = {nome: "Teste", idade: 12}
let obj2 = {nome: "Teste", idade: 12}
let tabela = [obj, obj2]

app.get('/', (req, res) => {
   res.json(db.buscar("clientes"))
})

app.get('/item', (req, res) => {
    const {id} = req.body
   res.json(db.buscarItem(id))
})
app.post('/', (req, res) => {
    const resposta = db.adicionar("pessoas",req.body)
    res.end(resposta)
})

app.put('/', (req, res) => {
    const response = db.alterar(req.body)
    res.end(response)
})

app.delete("/item", (req, res) => {
    const {id} = req.body
    const resposta = db.deletar(id)
    res.send(resposta)
})

app.listen(3000, ()=> {
    console.log("Servidor Rodando na porta 3000")
})