/*
    Funçoes imediatas ou IIFE (Immediately Invoked Function Expression) são funções que são executadas imediatamente após serem definidas.

    Funções imediatas são usadas para criar um escopo isolado para variáveis, e para evitar que variáveis globais sejam criadas.

    Funções imediatas são usadas para criar funções que podem ser executadas em um determinado momento.
*/

// Exemplo:

(function () {
    console.log('Função imediata')
})() // Função imediata

/*

    No exemplo acima, a função é definida e executada imediatamente.

*/


// Exemplo de uso de funções imediatas

(function () {
    let nome = 'João'
    console.log(nome)
})() // João

console.log(nome) // Erro: nome is not defined

/*
    Por que isso ocorre?

    A variável nome é criada dentro da função imediata, e não pode ser acessada fora dela.

    Isso ocorre porque a função imediata cria um escopo isolado para as variáveis, e evita que variáveis globais sejam criadas.
*/

// Exemplo de uso de funções imediatas

let nome = 'João'

(function (nome) {
    console.log(nome)
}
)(nome) // João

console.log(nome) // João


 