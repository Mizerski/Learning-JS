/*

    Avançando um pouco mais, o console tambem pode ser usado para mostrar funções, objetos, arrays, etc.

*/


// Exemplo de uso do console.log() para mostrar um objeto

let pessoa = {
    nome: 'João',
    idade: 30,
    sexo: 'Masculino'
}

console.log(pessoa) // { nome: 'João', idade: 30, sexo: 'Masculino' }


// Exemplo de uso do console.log() para mostrar um array

let frutas = ['Maçã', 'Banana', 'Laranja', 'Uva']

console.log(frutas) // [ 'Maçã', 'Banana', 'Laranja', 'Uva' ]


// Exemplo de uso do console.log() para mostrar uma função

function somar(a, b) {
    return a + b
}

console.log(somar) // [Function: somar]


// Exemplo de uso do console.log() para mostrar uma função

console.log(somar(2, 3)) // 5

// Concatenando mensagens com o console.log()

console.log('O resultado da soma é: ' + somar(2, 3)) // O resultado da soma é: 5

