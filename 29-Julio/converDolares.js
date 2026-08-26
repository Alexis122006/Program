import readline from 'readline';

const convertir = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

convertir.question("Ingrese la cantidad de dólares a convertir: ", function(dolares){
    convertir.question("Ingrese la tasa de cambio actual del euro (0.88): ", function(tasa){

    let cantidadDolares = parseFloat(dolares);
    let tasadecambio = parseFloat(tasa);
    let euros = cantidadDolares * tasadecambio;

    console.log(`La cantidad de euros que obtienes es: ${euros.toFixed(2)}`);
    convertir.close();
    }) 
})