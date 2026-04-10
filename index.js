const http = require("http")

//Carrego a página -> GET = Buscando recursos no servidor
//Envio formulário -> POST = Criando recurso no servidor
//Envio alguma alteração -> PUT = Alterando recurso no servidor
//Alterando algo específico -> PATCH = Alterando recurso muito específico
//Excluo conta -> DELETE = Deletando Recurso do servidor

const server = http.createServer((req, res) => {
    console.log("URL: ", req.url, " Método",req.method)
    if (req.url == "/sala" && req.method == "GET"){
        res.end("<h1>PEGAR SALA DE ESTAR<h2>")
        return
    }

    if (req.url == "/sala" && req.method == "POST"){
        res.end("<h1>Criar SALA DE ESTAR<h2>")
        rexturn
    }

    if (req.url == "/cozinha"){
        res.end("<h1>Cozinha<h2>")
        return
        console.log(teste)
    }

    if (req.url == "/quarto"){
        res.end("<h1>Quarto<h2>")
        return
        console.log(teste)
    }

    if (req.url == "/quarto/banheiro"){
        res.end("<h1>Banheiro dentro do quarto<h2>")
        return
        console.log(teste)
    }

    res.end("<h1>Página nao encontrada</h1>")
})

server.listen(3000, () => {
    console.log("Servidor Rodando em:        http://localhost:3000")
})

//npm init -y
//node --watch index.js