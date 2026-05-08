import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/restaurante")
    .then(() => {
        console.log("Banco conectado com sucesso")
    })
    .catch((error) => {
        console.log("Erro ao conectar com Banco: ", error)
    })

export default  mongoose