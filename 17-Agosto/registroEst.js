import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el nombre del estudiante: ', function(nombre) {
    rl.question('Ingrese el apellido del estudiante: ', function(apellido) {
        rl.question('Ingrese el año de ingreso del estudiante: ', function(anio) {
            rl.question('Ingrese la cuota a pagar del estudiante: ', function(numero) {
                let nombreMayusculas = nombre.toUpperCase();
                let apellidoMayusculas = apellido.toUpperCase().slice(0, 3);
                let anioIngreso = anio.toString().slice(2, 4);
                let cuotaPagar = parseFloat(numero).toFixed(2);

                console.log("");
                console.log(`Estudiante: ${nombreMayusculas} ${apellidoMayusculas}...`);
                console.log(`Año de ingreso: ${anioIngreso}`);
                console.log(`Cuota a pagar: $${cuotaPagar}`);
                rl.close();
            });
        });
    });
});