import readline from 'readline';

const data = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

data.question("Ingrese cualquier dato: ", function(dato){
    let valorIngresado = parseFloat(dato);
    let tipoDato = isNaN(valorIngresado);

    console.log(`El dato ingresado por el usuario fue: ${dato}`);
    console.log(`Resultado obtenido de paseFloat: ${valorIngresado}`);
    console.log(`¿El dato no es un numero?: ${tipoDato}`);
    data.close();
})

