// 3 - ALGORITMO QUE DEFINE UMA MÉDIA COM BASE EM UMA LISTA DE NOTAS E DEFINE SE UM ALUNO FOI APROVADO OU NÃO

const valores = [10, 8, 7.5, 2]

let soma = 0

for(let i = 0; i < valores.length; i++){
    soma += valores[i]
}
let media =  soma / valores.length 
if(media >= 7){
    console.log("Aprovado")
}else {
    console.log("Reprovado")
}
