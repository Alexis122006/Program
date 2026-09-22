import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("¿Cuánto dinero ahorra cada dia?;", (respuesta)=>{
    const ahorroDiario = Number(respuesta);
    let ahorroTotal = 0;
    for(let dia=1;dia<=5;dia++){
        ahorroTotal = ahorroTotal+ahorroDiario;
        console.log(`Día ${dia} ahorro: $${ahorroTotal.toFixed(2)}`)
    }
    console.log(`Ahorro total: $${ahorroTotal.toFixed(2)}`)
    rl.close()
})