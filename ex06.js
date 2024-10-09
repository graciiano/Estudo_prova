const numeros = [3, 1, 0, 4, 2, 5, 6, 2, 4, 3];

const resultado = [];

for (let i = 0; i < numeros.length; i++) {
    let ehrepetido = false;

    for (let j = 0; j < numeros.length; j++) {
        
        if (numeros[i] === resultado[j]) {
            ehrepetido = true;            
        }
    }
    
    if (!ehrepetido) {
        resultado.push(numeros[i])
    }
}

console.log(resultado)