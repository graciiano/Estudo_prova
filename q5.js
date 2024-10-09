const dados = {
    usuarios: [
        {id: 1, nome: "Alice", idade: 30, ativo: true},
        {id: 2, nome: "bob", idade: 25, ativo: false},
        {id: 3, nome: "charlie", idade: 35, ativo: true},
    ]
};

const NomesAtivos = Object.values(dados.usuarios).filter(usuario => usuario.ativo).map(usuario => usuario.nome)

console.log(NomesAtivos)