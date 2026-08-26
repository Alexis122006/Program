import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Cuál es tu nombre? ', function(nombre) {
    let nombreMayusculas = nombre.toUpperCase();
    let nombreMinusculas = nombre.toLowerCase();

  console.log(nombreMayusculas);
  console.log(nombreMinusculas);
  rl.close();
});