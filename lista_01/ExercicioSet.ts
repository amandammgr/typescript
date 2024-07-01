import readlinesync = require("readline-sync");

const numeros: Set<number> = new Set<number>();
let numero: number = 0;

numeros.add(2);
numeros.add(5);
numeros.add(1);
numeros.add(3);
numeros.add(4);
numeros.add(9);
numeros.add(7);
numeros.add(8);
numeros.add(10);
numeros.add(6);

numero = readlinesync.questionInt("\nDigite o numero que deseja encontrar: ");

console.table(numeros);

if (numero <= 0 || numero >= 11)
    console.log(`\nO numero ${numero} não foi encontrado!`);
else console.log(`\nO numero ${numero} foi encontrado!`);


// Pensei em utilizar o comando has mas desisti.
// console.log(`\nA O numero ${numero} foi encontrado? ${numero.has("Numero")}`);