
/*

   No Javascript, temos o looping map, que é uma estrutura de controle que permite a execução de um bloco de código repetidamente, enquanto uma condição for verdadeira.

    O looping map é usado para iterar sobre os elementos de um array, aplicando uma função a cada elemento.

*/

// Exemplo:

let numeros = [1, 2, 3, 4, 5]

let numerosDobrados = numeros.map(function (numero) {

    return numero * 2

})

console.log(numerosDobrados) // [2, 4, 6, 8, 10]

/*

    No exemplo acima, a função map() é usada para dobrar os elementos do array numeros.
    
    */

// Exemplo:

let frutas = ['banana', 'maçã', 'melancia']

let frutasMaiusculas = frutas.map(function (fruta) {

    return fruta.toUpperCase()

})

console.log(frutasMaiusculas) // ['BANANA', 'MAÇÃ', 'MELANCIA']

/*

    No exemplo acima, a função map() é usada para transformar as frutas do array frutas em letras maiúsculas.

    */

// Exemplo:

let pessoas = [
    { nome: 'Wesley', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'João', idade: 35 }
]

let nomes = pessoas.map(function (pessoa) {

    return pessoa.nome

})

console.log(nomes) // ['Wesley', 'Maria', 'João']