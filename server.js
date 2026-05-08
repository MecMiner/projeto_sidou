import express from "express"
import Database from "./database.js"
import db1 from "./dbconexao.js"
import Pratos from "./models/pratos.js"
import Pedidos from "./models/pedidos.js"

const app = express()
app.use(express.json())

app.get("/pratos", async (req, res) => {
    const pratos = await Pratos.find()
    res.json(pratos)
})

app.get("/pedidos", async (req, res) => {
    const pedidos = await Pedidos.find().populate({path: "pratos", select: "nome"})
    console.log(pedidos)
    res.json(pedidos)
})

app.post("/pedidos", async (req, res) => {
    const novoPedido = new Pedidos(req.body)
    await novoPedido.save()
    res.json(novoPedido)
})



const db = new Database()

let obj = {nome: "Teste", idade: 12}
let obj2 = {nome: "Teste", idade: 12}
let tabela = [obj, obj2]

//Restaurante Reservas de Mesa
//CRUD -> 3 Entidades
// Mesa - Pratos - Cliente

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


//-> criação de login (Email e Senha)
//-> Login
app.post("/usuarios/criar", (req, res) => {
    const {email, senha} = req.body
    if(!email && !senha){
        console.log("Dados inválido")
    } else {
        const dados = db.buscar("Usuários")
    }
    res.send("Criando usuários")
})

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