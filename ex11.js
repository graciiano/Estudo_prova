const numeros = [3,7,9,2,1,5];

let resultado = null;

const target = 6;

for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[i] + numeros[j] === target) {
            resultado = [i, j]
            break;
        }
    }
}

console.log(resultado)