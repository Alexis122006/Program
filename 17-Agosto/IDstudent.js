import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa el código del estudiante (ej: u20260772):', function(codigo) {
    let codigoAbreviado = codigo.slice(0, 3).toUpperCase();
    console.log(codigoAbreviado);
    rl.close();
});