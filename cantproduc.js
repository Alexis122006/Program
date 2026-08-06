import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el precio del producto: ", function(precio){
    rl.question("Ingrese la cantidad de producto: ", function(cantidad){
    let precioProducto = parseFloat(precio);
    let cantidadProducto = parseInt(cantidad);

    let totalPagar = precioProducto * cantidadProducto; 
    console.log(`El total a pagar por ${cantidadProducto} productos es: $${totalPagar.toFixed(2)}`);
    rl.close();
    })
})