import mongoose, { Schema, model } from "mongoose";

const PedidosSchema = new Schema({
    pratos:  [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pratos"
    }]
})

const Pedidos = new model("Pedidos", PedidosSchema)

export default Pedidos