import {randomUUID} from "crypto"
//git init
//git remote add origin https://github.com/MecMiner/projeto_sidou.git

class Database {
    database = []

    constructor (){}

    adicionar(item){
        const novoItem = {
            id: randomUUID(),
            nome: item.nome,
            idade: item.idade
        }
        this.database.push(novoItem)
    }

    buscar(){
        return this.database
    }

    alterar(item){
        const {id, nome, idade} = item
        let index = this.database.findIndex(elem => elem.id == id)
        if(index == -1){
            return "Id não encontrado"
        }
        this.database[index].nome = nome
        this.database[index].idade = idade
    }
}

export default Database


