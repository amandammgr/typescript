import { Queue } from "../interface/Queu";
const leia = require("readline-sync");

const fila = new Queue<string>();
let nomeCliente: string;
let codigo: number;
let continua = true

console.log("\n-----Menu-----");
console.log("\n1 - Adicionar cliente na fila");
console.log("\n2 - Listar todos os clientes");
console.log("\n3 - Retirar cliente da fila");
console.log("\n0 - Sair");

while (continua) {

    codigo = leia.questionInt("Digite a opcao escolhida: ");

    switch (codigo) {
        case 1:
            console.log("Adicione cliente na fila: ");
            nomeCliente = leia.question("\nDigite o nome do cliente: ");
            fila.enqueue(nomeCliente);
            console.log("\nCliente adicionado!");
            break;
        case 2:
            console.log("\nTodos os clientes na fila: ");
            fila.printQueue();
            break;
        case 3:
            console.log("\nRemover cliente da fila: " + fila.dequeue());
            break;
        case 0:
            continua = false
            console.log("Programa finalizado!")
            break;
    }

}