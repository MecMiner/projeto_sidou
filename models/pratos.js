import { Schema, model } from "mongoose";

const PratosSchema = new Schema({
    nome: {type: String, required: true},
    preco: {type: Number, required: true}
})

const Pratos = new model("Pratos", PratosSchema)

export default Pratos