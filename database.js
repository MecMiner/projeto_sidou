import {randomUUID} from "crypto"
import fs from "fs/promises"
//git init
//git remote add origin https://github.com/MecMiner/projeto_sidou.git
const arquivo = new URL("./dados.json", import.meta.url)

class Database {
    database = []

    constructor (){
        fs.readFile(arquivo, 'utf-8')
        .then(dados => {
            this.database = JSON.parse(dados);
        })
        .catch(() => {
            this.atualizar();
        })
    }

    atualizar(){
        fs.writeFile(arquivo, JSON.stringify(this.database))
    }

    adicionar(item){
        const novoItem = {
            id: randomUUID(),
            nome: item.nome,
            idade: item.idade
        }
        this.database.push(novoItem)
        this.atualizar()
    }

    buscar(){
        return this.database
    }

    buscarItem(id){
        let item = {}
        if(Array.isArray(this.database)){
            item = this.database.find(elemento => elemento.id == id)
        }
        return item
    }

    alterar(item){
        const {id, nome, idade} = item
        let index = this.database.findIndex(elem => elem.id == id)
        if(index == -1){
            return "Id não encontrado"
        }
        this.database[index].nome = nome
        this.database[index].idade = idade
        this.atualizar()
        return "Dados atualizados com sucesso"
    }

    deletar(id){
        let index = this.database.findIndex(elem => elem.id == id)
        if(index == -1){
            return "Id não encontrado"
        }

        this.database.splice(index, 1)

        return ("Deletado com sucesso")
    }
}

export default Database


