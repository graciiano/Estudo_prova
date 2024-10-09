 // Crie uma função que conte quantas vogais existem em uma string.

const vogais = 'AEIOU'

// let str = 'Diogo'
// str = str.toUpperCase();
// let ctd = 0
// for (let i = 0; i < str.length; i++ ) {
//     for (let j = 0; j < vogais.length; j++) {
//         if (str[i] === vogais[j]) {
//             ctd++
//         }
//     }
// }

// console.log(ctd)

let str = 'ana banana'

str = str.toUpperCase();

let ctd = 0;

for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vogais.length; j++){
        if (str[i] === vogais[j]) {
            ctd++
        }
    }
}

console.log(ctd)
