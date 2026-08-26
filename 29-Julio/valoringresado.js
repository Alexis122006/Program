import readline from 'readline';

const data = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

data.question("Ingrese cualquier dato: ", function(dato){
    let valorIngresado = parseFloat(dato);

    if (isNaN(valorIngresado)) {
        console.log("El dato ingresado no es un número válido.");
    } else {
        console.log("El dato ingresado es un número válido.");
    }

    console.log(`El dato ingresado por el usuario fue: ${dato}`);
    console.log(`Resultado obtenido de paseFloat: ${valorIngresado}`);
    console.log(`¿El dato no es un numero?: ${isNaN(valorIngresado)}`);
    data.close();
})

