const pedirPizza = new Promise (( resolve , reject ) => {
    //console.log (" Pedido em preparo ...")

    setTimeout(() => {
        const sucesso = true ;
        if ( sucesso ) {
            resolve(" Pizza pronta !") ;
        } else {
            reject(" O forno quebrou !") ;
        }
    } , 3000) ;
});

const realizarPediro = async () => {
    try {
        const resultado = await pedirPizza;
        console.log("Oi")
        console.log(resultado)
    } catch (error) {
        console.log("Error: ", error)
    }
}

async function teste(){
    const res = await pedirPizza;
}

console.log("Testando sincrono")

realizarPediro()