import { Queue } from "../interface/Queu";

const fila = new Queue<number>();

for (let i = 1; i <= 10; i++){
    fila.enqueue(i)
}

console.log("\nExibir todos os Elementos da fila: ");

fila.printQueue();

console.log("\nRemover Elemento: "+ fila.dequeue());

fila.printQueue();

console.log("\nExibir o primeiro elemento da fila: " + fila.peek());

console.log("\nExibir o primeiro elemento da fila: " + fila.contains(4)); // checar se existe esse elemento na fila

console.log("\nExibir o primeiro elemento da fila: " + fila.isEmpty()); // pra ver se a fila ta vazia

// fila.clear(); // limpa a fila

// console.log("\nA fila está vazia? " + fila.isEmpty());