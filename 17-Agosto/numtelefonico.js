import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa tú numero telefónico: ', function(numero) {
    let texto = numero.toString().slice(0, 4);
    console.log(`${texto}...`);
    rl.close();
});
