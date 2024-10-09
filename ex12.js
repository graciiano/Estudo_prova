const numeros = [2,3,1,4,5,6,7,8,10]
                   
for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length - 1 - i; j++) {
        if (numeros[j] > numeros[j + 1]){
            let temp = numeros[j];
            numeros[j] = numeros[j + 1]
            numeros[j + 1] =  temp;
        }    
    }
}

console.log(numeros)




// for (let i = 0; i < numeros.length; i++) {
//     for (let j = 0; j < numeros.length - 1 - i; j++) {
//         if (numeros[j] > numeros[j + 1]){
//             let temp = numeros[j];
//             numeros[j] = numeros[j + 1];
//             numeros[j + 1] = temp;
//         }
//     }    
// }
// console.log(numeros)