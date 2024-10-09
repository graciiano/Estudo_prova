const prompt = require('prompt-sync')();

function soma(a, b) {
    return a + b;
}

function subt(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    if (b === 0) {
        console.log("Não é possível dividir por 0");
        return null; 
    } else {
        return a / b;
    }
}

let out = 1;

while (out !== 0) {
    out = parseInt(prompt("[ 1 ] Calculadora\n[ 0 ] Sair: "));
    console.log("=====================================\n");

    switch (out) {
        case 1:
            let menu = prompt("[ + ] Soma\n[ - ] Subtração\n[ x ] Multiplicação\n[ / ] Divisão: ");
            let n1 = parseFloat(prompt("Informe o primeiro valor: "));
            let n2 = parseFloat(prompt("Informe o segundo valor: "));
            let result;

            switch (menu) {
                case "+":
                    result = soma(n1, n2);
                    console.log(`${n1} + ${n2} = ${result}`);
                    break;

                case "-":
                    result = subt(n1, n2);
                    console.log(`${n1} - ${n2} = ${result}`);
                    break;

                case "x":
                    result = mult(n1, n2);
                    console.log(`${n1} x ${n2} = ${result}`);
                    break;

                case "/":
                    result = div(n1, n2);
                    if (result !== null) { 
                        console.log(`${n1} / ${n2} = ${result}`);
                    }
                    break;

                default:
                    console.log("Opção inválida...");
            }
            break; 

        case 0:
            console.log("Saindo...");
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
    }
}
