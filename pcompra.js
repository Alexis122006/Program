import readline from 'readline';

const recibo = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

recibo.question("Ingrese el precio del producto: ", function(precio){
    recibo.question("Ingrese el descuento a aplicar: ", function(descuento){
    let precioProducto = parseFloat(precio);
    let porcentaje = parseFloat(descuento);

    let valorDescuento = precio * (porcentaje / 100);
    let precioFinal = precioProducto - valorDescuento;

    console.log(`Precio original: $${precioProducto.toFixed(2)}`);
    console.log(`Valor del descuento: $${valorDescuento.toFixed(2)}`); 
    console.log(`Precio final a pagar: $${precioFinal.toFixed(2)}`);
    recibo.close();
    })
})