import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese una cantidad de horas: ", function(horas){
    horas = Number(horas);
    const minutos = horas * 60;
    console.log(`La cantidad de minutos es: ${minutos}`);
    rl.close();
})
