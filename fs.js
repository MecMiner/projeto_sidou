import fs from "fs/promises"

const objeto = {
    nome: "Pedro",
    idade : 18
}

console.log(objeto)
fs.readFile("dados.json", "utf-8").then(dados => {
    const dadosOBJ =  JSON.parse(dados);
    console.log(dadosOBJ)}
)