// Objective: how to use arrays in JavaScript

//Uso de Function - Função é um bloco de código que pode ser executado e reutilizado. Ela também pode receber dados,
// que são chamados de parâmetros ou argumentos.

function helloWorld(country){
    return `Hello World from ${country}`;
}
const country = helloWorld("Brazil");
console.log(country);

function add(num1, num2){
    return num1 + num2
}
console.log(add(2, 3));

const squareRoot = function(num){
    return num ** 0.5;
}
console.log(squareRoot(9));

//Uso de Arrow Function (=>) - Função de seta ou função flecha, serve para simplificar a sintaxe de uma função .
const subtraction = n => n - squareRoot(9);
console.log(subtraction(10));
