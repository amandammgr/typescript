import readlinesync = require("readline-sync");

let numero1: number;
let numero2: number;

// Escopo do programa
numero1 = readlinesync.questionFloat("Digite o primeiro numero: ")
numero2 = readlinesync.questionFloat("Digite o segundo numero: ")

console.log(`\nSoma: ${numero1} + ${numero2} = ${somar(numero1, numero2)}`);
console.log(`\nSubtração: ${numero1} - ${numero2} = ${subtrair(numero1, numero2)}`);
console.log(`\nMultiplicação: ${numero1} * ${numero2} = ${multiplicar(numero1, numero2)}`);

let resultadoDivisao = dividir(numero1, numero2);

if(resultadoDivisao){
    console.log(`\nDivisão: ${numero1} / ${numero2} = ${dividir(numero1, numero2)}`);
}else{
    console.log("Não existe divisão por zero!")
}
// console.log(`\nDivisão: ${numero1} / ${numero2} = ${dividir(numero1, numero2)}`);

autor();

// Escopo função
function somar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

function subtrair(numero1: number, numero2: number): number {
    return numero1 - numero2;
}

function multiplicar(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

function dividir(numero1: number, numero2: number): number|null {
    let divisão: number = numero1 / numero2;
    
    // Condicional  Ternário (condição ? ação se for verdadeiro : ação se for falso)
    return(divisão !== Infinity ? divisão : null);
}

function autor(): void{
    console.log('\nFeito por Amanda')
}