const nome = 'Diogo';

const repetidos = [];

const visto = [];

const array = nome.split('');

for (let i = 0; i < array.length; i++) {
    let str = array[i].toUpperCase();

    if (visto[str]) {
        if (!repetidos.includes(str)){
            repetidos.push(str)
        }
    } else {
        visto[str] = true;
    }
}

console.log(repetidos)
