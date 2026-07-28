import {readline} from "node:readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la base del rectángulo: ", function(base){
    rl.question("Ingrese la altura del rectángulo: ", function(altura){

        const area = Number(base) * Number(altura);
        console.log(`El área del rectángulo es: ${area}`);
        rl.close();
    })
})