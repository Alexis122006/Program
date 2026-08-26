import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la longitud en metros: ", function(metros){
    let longitudMetros = parseFloat(metros);

    let longitudCentimetros = longitudMetros * 100;
    
    console.log(`La longitud en centímetros es: ${longitudCentimetros.toFixed(2)} cm`);
    rl.close();
})