function processarDados(dados, callback) {
    setTimeout(() =>{
        const resultado = dados * 2;
        callback(resultado);
    }, 1000);

}

processarDados("5", (resultado => {
    console.log(typeof resultado === "number");
}))

