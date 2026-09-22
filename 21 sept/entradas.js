import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("¿Cuántas entradas se vendieron cada día?", (respuesta)=>{
    const entradasDiarias = Number(respuesta);
    let entradasTotales = 0;
    for(let dia=1;dia<=5;dia++){
        entradasTotales = entradasTotales+entradasDiarias;
        console.log(`Día ${dia} entradas vendidas: ${entradasTotales}`)
    }
    console.log(`Total de entradas vendidas en 5 días: ${entradasTotales}`)
    rl.close()
}) 