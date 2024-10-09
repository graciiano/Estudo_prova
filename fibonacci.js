// var fibGenerator = function*() {
//         let A = 0, B = 1;
//         sequence = [];
//         while (true) {
//             yield(A);
//             [A, B] = [B, A + B]
//         }
// };

// const gen = fibGenerator();
// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next().value); // 3

const limite = 10;
let A = 0, B = 1;

for (let i = 0; i < limite; i++) {
    console.log(A);
    [A, B] = [B, A + B]
}   
