import readlinesync = require("readline-sync");

const numeros: Array<number> = new Array<number>();
let numero: number = 0;

numeros.push(2);
numeros.push(5);
numeros.push(1);
numeros.push(3);
numeros.push(4);
numeros.push(9);
numeros.push(7);
numeros.push(8);
numeros.push(10);
numeros.push(6);

numero = readlinesync.questionInt("\nDigite o numero que deseja encontrar: ");

if (numero <= 0 || numero >= 11)
    console.log(`\nO numero ${numero} não foi encontrado!`);
else console.log(`\nA posição do numero ${numero} é: ${numeros.indexOf(numero)}`);

console.table(numeros);

