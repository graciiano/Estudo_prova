const array = ["apple", "banana", "orange", "apple", "kiwi", "banana", "grape"];

const visto = []
const repetidos = []


for (let i = 0; i < array.length; i++) {
    let str = array[i]

    if (visto[str]) {
        if (!repetidos.includes[str]) {
            repetidos.push(str)
        }
    } else {
        visto[str] = true;
    }
}


console.log(`String repetidas = ${repetidos}\n\nString original = ${array}`)