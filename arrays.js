const prompt = require('prompt-sync')();

// let nomes = ['diogo', 'vanessa', 'christina']; // sintaxe literal

// let nomes = new Array('diogo', 'vanessa', 'christina', 'joão') // função construtora


// let nome = prompt('Digite seu nome: ');

// nomes[nomes.length] = nome;

// for(let i = 0; i < nomes.length; i++) {
//     console.log(nomes[i])
// }

// console.log('A lista possui ' + nome.length + ' elementos')



// FUNÇÃO PUSH, ACRESCENTA VALORES EM UMA NOVA LISTA

// let numeros = [1, 3, 12, 434, 21, 33, 212, 345, 232, 4]
// let numeros2 =  []

// for(let i = 0; i < numeros.length; i++) {
//     let numero = numeros[i] * 2;
//     numeros2.push(numero, "---")
// }
// console.log(numeros2)


// const numeros = [2, 31, 0, 9, 12, 75, 98, 103, '9', 'qualquer coisa'];

// var soma = 0;

// for(let i = 0; i < numeros.length; i++){
//     let n = numeros[i]
    
//     if(typeof n === "number"){
//         soma += n;
//     }
// }
// console.log(soma)


// const numeros = [1, 2 , 3, 4, 5, 6];

// let qtd = parseInt(numeros.length / 2);

// console.log(qtd)



// const numeros = [1, 2 , 3, 4, 5, 6, 23, 22, 423, 999];

// let soma = 0

// for(let i = 0; i < numeros.length; i++) {
//     let n = numeros[i];
//     if(n % 2 !== 0 ) {
//         soma += n
//     }
// }
// console.log('A soma dos impares é: ' +soma)


const nomes = ['diogo', 'vanessa', 'christina', 'joão'];

for(let i = nomes.length - 1; i >= 0; i-- ) {

    console.log(nomes[i])
}
