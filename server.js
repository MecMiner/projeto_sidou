import express from "express"
import Database from "./database.js"
const app = express()
app.use(express.json())

const db = new Database()

app.get('/', (req, res) => {
   res.json(db)
})

app.post('/', (req, res) => {
    db.adicionar(req.body)
    res.end("Dados enviados!")
})

app.put('/', (req, res) => {
    const response = db.alterar(req.body)
    res.end(response)
})

app.listen(3000, ()=> {
    console.log("Servidor Rodando na porta 3000")
})