const numeros = [3,1,0,4,2,5,6];

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
        if (numeros[j] > numeros[j + 1]) {
            let temp = numeros[j];
            numeros[j] = numeros[j + 1] 
            numeros[j + 1] = temp 
        }
    }   
}










