import {randomUUID} from "crypto"
import fs from "fs/promises"
//git init
//git remote add origin https://github.com/MecMiner/projeto_sidou.git
const arquivo = new URL("./dados.json", import.meta.url)

// CRUD 
// CREATE
// READ
// UPDATE
// DELETE


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
        console.log(this.database)
    }

    adicionar(tabela, item){
        const novoItem = {
            id: randomUUID(),
            ...item
        }
        let msg = ""

        if (Array.isArray(this.database[tabela])){
            this.database[tabela].push(novoItem)
            msg =  "Item adicionado em tabela existente"
        } else {
            this.database[tabela] = [novoItem]
            msg =  "Nova tabela criada"
        }

        this.atualizar()
        return msg
    }


    
    buscar(tabela){
        const dados = this.database[tabela] ?? []
        return dados

        /*
        if (this.database[tabela]){
            return this.database[tabela]
        } else {
            return []
        }

        */
    }

    buscarItem(tabela, id){
        if (Array.isArray(this.database[tabela])){
            const item = this.database[tabela].find(elemento => elemento.id == id)
            return item
        } else {
            return "Tabela não encontrada"
        }
    }

    alterar(tabela, id ,item){
        if (Array.isArray(this.database[tabela])){
            const {nome, idade} = item
            let index = this.database[tabela].findIndex(elem => elem.id == id)
            if(index == -1){
                return "Id não encontrado"
            }
            this.database[index].nome = nome
            this.database[index].idade = idade
            this.atualizar()
            return "Dados atualizados com sucesso"
        } else {
            return "Tabela não encontrada"
        }
    }

    deletar(tabela, id){
        if (Array.isArray(this.database[tabela])){
            let index = this.database[tabela].findIndex(elem => elem.id == id)
            if(index == -1){
                return "Id não encontrado"
            }
            
            this.database.splice(index, 1)
            return ("Deletado com sucesso")
            
        } else {
            return ("Tabela não encontrada")
        }
    }
}

export default Database


