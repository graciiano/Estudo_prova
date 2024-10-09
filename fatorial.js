// 5 ! = 5x 5 + 5x4 + 5x3 + 5x2 + 5x1 

let fatorial = 10;
let resultado = 1
let qtd = 0

for (let i = 1; i <= fatorial; i++) {
    resultado  *= i;
    console.log(`${i}! = ${resultado}`)
}

console.log(resultado)