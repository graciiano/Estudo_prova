const prompt = require('prompt-sync')();


const array = []

for (let i = 0; i < 3; i++) {
    let insert = prompt('Insira o nome: ')
    array.push(insert)
}




console.log(array)

