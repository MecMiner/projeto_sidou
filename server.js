import express from "express"
import db1 from "./dbconexao.js"
import Pratos from "./models/pratos.js"
import Pedidos from "./models/pedidos.js"

const app = express()
app.use(express.json())

app.get("/pratos", async (req, res) => {
    try {
        const pratos = await Pratos.find()
        res.status(201).json(pratos)
    } catch (error) {
        res.status(500).json({error: "Erro ao buscar pratos"})
    }
})

app.get("/pratos/:id", async (req, res) => {
    try {
        const {id} = req.params
        const pratos = await Pratos.findById(id)
        res.status(201).json(pratos)
    } catch (error) {
        res.status(500).json({error: "Erro ao buscar prato"})
    }
})

app.put("/pratos/:id", async (req, res) => {
    try {
        const {id} = req.params
        const {preco} = req.body
        const prato = await Pratos.findByIdAndUpdate(id,{preco}, {new: true} )

        if(!prato) return res.status(404).json({error: "Prato não encontrado"})
        res.status(200).json(prato)
        // atributo: valores
    } catch (error) {
        res.status(500).json({error: "Erro ao alterar prato"})
    }
})

app.delete("/pratos/:id", async (req, res) => {
    try {
        const {id} = req.params
        const prato = await Pratos.findByIdAndDelete(id)

        if(!prato) return res.status(404).json({erro: true, mensagem: "Prato não encontrado"})
        res.status(200).json({erro: false, mensagem: "Prato deletado"})
        // atributo: valores
    } catch (error) {
        res.status(500).json({error: "Erro ao alterar prato"})
    }
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



app.listen(3000, ()=> {
    console.log("Servidor Rodando na porta 3000")
})