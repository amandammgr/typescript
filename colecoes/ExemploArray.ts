import readlinesync = require("readline-sync");

const numeros: Array<number> = new Array<number>();

numeros.push(7);
numeros.push(5);
numeros.push(1);
numeros.push(7);

// numeros.push(readlinesync.questionFloat("Digite um numero: "));

numeros.unshift(2.5, 3.6, 8);

for(let numero of numeros)
    console.log(numero);

console.log(numeros);

console.log(`\nA posição do elemento 5 é: ${numeros.indexOf(5)}`)
console.log(`\nA posição do elemento 50 é: ${numeros.indexOf(50)}`)
console.log(`\nA posição do elemento 7 é: ${numeros.indexOf(7)}`)

console.log(`\nExiste no Array p elemento 5? ${numeros.includes(5)}`)

// Atualização de valor
numeros[numeros.indexOf(5)] = 10 //procura o elemento 5 e substitui o valor para 10

console.table(numeros);
// Apagar um valor
numeros.splice(numeros.indexOf(10), 1); // apaga só o 10, se colocar numero 2 ele apaga o 10 e o proximo elemento

console.table(numeros); //comando pra mostrar