import express from "express"
import mongoose from "mongoose";

const app = express()
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/local")
    .then(
        () => {
                console.log("Conexão com o banco bem sucedida")
            }
        )
    .catch(
        (error) => {
            console.log("Conexão com o banco falhou: ", error)
        }
    )

const PratosSchema = new mongoose.Schema(
    {
        nome: {type: String, required: true},
        preco: Number,
        descricao: String
    }
)

const Pratos = mongoose.model('Pratos', PratosSchema)

app.get('/pratos', async (req, res) => {
    try {
        const pratos = await Pratos.find()
        res.json(pratos)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.post('/pratos', async (req, res) => {
    try {
        const novoPrato = new Pratos(req.body)
        await novoPrato.save()
        res.send("Novo prato criado")
    } catch (error) {
        res.send(`Error: ${error}`)
    }

})

app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333")
})