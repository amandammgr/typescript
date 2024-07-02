import { Stack } from "../interface/Stack";

const leia = require("readline-sync");

const pilha = new Stack<string>();
let nomeLivro: string;
let codigo: number;
let continua = true

console.log("\n-----Menu-----");
console.log("\n1 - Adicionar livro na pilha");
console.log("\n2 - Listar todos os livros");
console.log("\n3 - Retirar livro da pilha");
console.log("\n0 - Sair");

while (continua) {

    codigo = leia.questionInt("Digite a opcao escolhida: ");

    switch (codigo) {
        case 1:
            console.log("Adicionar livro na pilha: ");
            nomeLivro = leia.question("\nDigite o nome do livro: ");
            pilha.push(nomeLivro);
            console.log("\nLivro adicionado!");
            break;
        case 2:
            console.log("\nTodos os livros da pilha: ");
            pilha.printStack();
            break;
        case 3:
            console.log("\nRemover livro da pilha: " + pilha.pop());
            break;
        case 0:
            continua = false
            console.log("Programa finalizado!");
            break;
    }

}