const prompt = require('prompt-sync')();



var n1 = parseFloat(prompt('Digite um numero de 0 a 10: '));

var n2 = parseFloat(prompt('Digite um numero de 0 a 10: '));

var media = (n1 + n2) / 2;

if(media >= 7) { 
    console.log("True");
}else {
    console.log("False")
}