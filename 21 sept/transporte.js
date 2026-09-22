import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("¿Cuánto dinero gasta en transporte cada día?", (respuesta)=>{
    const gastoDiario = Number(respuesta);
    let gastoTotal = 0;
    for(let dia=1;dia<=6;dia++){
        gastoTotal = gastoTotal+gastoDiario;
        console.log(`Día ${dia} gasto acumulado: $${gastoTotal.toFixed(2)}`)
    }
    console.log(`Gasto total en transporte durante 6 días: $${gastoTotal.toFixed(2)}`)
    rl.close();
});