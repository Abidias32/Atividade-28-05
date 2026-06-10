
/*let frutas = ["maçã", "leite", "pão", "ovos", "café"];
console.log(frutas [0] );
console.log(frutas [1] );
console.log(frutas [2] );
console.log(frutas [3] );
console.log(frutas [4] );


let total = frutas.length;
console.log(total);
console.log(frutas[frutas.length - 1]);

frutas.push("banana");
let ultimo = frutas.pop();
console.log(total);
console.log(frutas[frutas.length - 1]);*/

/*
let frutas = ["maçã", "leite", "pão", "ovos", "café"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
*/

let produtos = [
    ["pão", 5.00],
    ["leite", 4.50],
    ["café", 15.00]
];

let nome = produtos[0][0]; //"pão"
let preco = produtos[0][1]; //5.00
let nome2 = produtos[1][0]; //"leite"
let preco2 = produtos[1][1]; //4.50
let nome3 = produtos[2][0]; //"café"
let preco3 = produtos[2][1]; //15.00

console.log(produtos[1][0]);    //"leite"
console.log(produtos[1][1]);    //4.50

for (let i = 0; i < produtos.length; i++)
     {
for (let j = 0; j < produtos[i].length; j++) {
    console.log(produtos[i][j]);
}  
}
