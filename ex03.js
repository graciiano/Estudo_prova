// 2 - ALGORITMO QUE BUSCA MAIOR VALOR EM UMA LISTA

const array = [12, 3, 15, 2, 7, 88, 0]

let maior = array[0]
let menor = array[0]


let qtd = 0

for (let i = 0; i < array.length; i++) {
    qtd++
    if (array[i] > maior) {
        maior = array[i]
    } else if (array[i] < menor) {
        menor = array[i]
    }
 }

// for(let i = 0; i < array.length; i++) {
//      qtd = array.length; 
//     if(array[i] > maior){
//         maior = array[i];
//     } else if (array[i] < menor){
//         menor = array[i];
//     }
// }

console.log(`O maior elemento da lista é >> ${maior} e o menor é >> ${menor}.\nNúmero de elementos = ${qtd}`)











