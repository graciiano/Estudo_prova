
// let produtos = new Object();

// produtos.nome = 'Computador';
// produtos.preco = 5432.87;
// produtos.quantidade = 5;

// console.log(produtos)

// const carros = {
//     nome: 'Golf-G6',
//     preco: 56000,
//     quantidade: 3

// }

// console.log(`${carros.nome} custa R$ ${carros.preco} e há ${carros.quantidade} unidades em estoque `)


const carro = {
    nome: 'uno',
    ano: 2023,
    km: 10000,
    combustivel: 'gasolina',
    listrosconsumidos: 625
}

media = carro.km / carro.listrosconsumidos
console.log(`O carro ${carro.nome} ${carro.ano} fez em média ${media} Km/L de ${combustivel}`)