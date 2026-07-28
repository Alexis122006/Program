import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del producto a llevar: ", function(producto){
    rl.question("Ingrese la cantidad de productos a llevar: ", function(precio){
        rl.question("Ingrese el precio del producto: ", function(cantidad){
            producto = String(producto);
            precio = Number(precio);
            cantidad = Number(cantidad);

            const total = precio * cantidad;
            console.log(`El total a pagar por ${producto} es: ${total}`);
            rl.close();
        })
    })
})
   