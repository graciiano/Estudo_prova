const prompt = require('prompt-sync')();

let n1 =  parseInt(prompt("Informe um numero de 0 a 6: "));


switch (n1) {
    case 0:
        console.log("Domingo")
        break;
    case 1:
        console.log("Segunda")
        break;
    case 2:
        console.log("Terça")
        break;
}
