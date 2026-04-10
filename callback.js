

function soma(a,b, funcaoEscrever){
    resultado  = a + b;
    funcaoEscrever(resultado)
}

soma(8,4, (x) => {
    console.log("Resultado :", x);
})