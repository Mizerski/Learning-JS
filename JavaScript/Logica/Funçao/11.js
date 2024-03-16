/*
    Funçao geradora no JavaScript

    Funçao geradora é uma funçao que cria um objeto, ou seja, ela é um molde para criar objetos.
*/

function* geradora() {
    yield 'Valor 1'
    yield 'Valor 2'
    yield 'Valor 3'
}

let g = geradora()

console.log(g.next().value) // Valor 1
console.log(g.next().value) // Valor 2
console.log(g.next().value) // Valor 3


/*
    O que é esse yield? e esse *?

    O yield é uma palavra reservada que pausa a execução da função geradora, e o * é o que define a função como geradora.

    O yield é utilizado para retornar um valor, e pausar a execução da função geradora.

    O next é utilizado para continuar a execução da função geradora.

    O next retorna um objeto, e o value é o valor que foi retornado pelo yield.


    Quando iremos usar a função geradora?

    - Quando queremos criar um objeto que tenha um comportamento, ou seja, que tenha métodos.

*/