// Uso de Function - Função é um bloco de código que pode ser executado e reutilizado. Ela também pode receber dados,
// que são chamados de parâmetros ou argumentos.

// Definindo uma função chamada helloWorld que recebe um parâmetro 'country'
function helloWorld(country) {
    // Retorna uma string concatenada com o nome do país recebido como parâmetro
    return `Hello World from ${country}`;
}

// Chamando a função helloWorld com o argumento "Brazil" e armazenando o resultado em 'country'
const country = helloWorld("Brazil");

// Exibe a string resultante da chamada da função helloWorld no console
console.log(country);

// Definindo uma função chamada add que recebe dois parâmetros 'num1' e 'num2'
function add(num1, num2) {
    // Retorna a soma dos dois números recebidos como parâmetros
    return num1 + num2;
}

// Chamando a função add com os argumentos 2 e 3 e exibindo o resultado no console
console.log(add(2, 3));

// Definindo uma função anônima (sem nome) e atribuindo-a a uma constante chamada squareRoot
const squareRoot = function (num) {
    // Retorna a raiz quadrada do número recebido como parâmetro
    return num ** 0.5;
}

// Chamando a função squareRoot com o argumento 9 e exibindo o resultado no console
console.log(squareRoot(9));

// Uso de Arrow Function (=>) - Função de seta ou função flecha, serve para simplificar a sintaxe de uma função.
// Definindo uma arrow function chamada subtraction que recebe um parâmetro 'n'
const subtraction = n => n - squareRoot(9);

// Chamando a função subtraction com o argumento 10 e exibindo o resultado no console
console.log(subtraction(10));
