/*

    Avançando um pouco nos arrays.

    Agora vamos ver como usar os metodos de iteração de arrays.

    O metodo forEach é um metodo que executa uma função para cada elemento do array.

*/

let frutas = ['Maçã', 'Banana', 'Laranja', 'Uva']

frutas.forEach(function (fruta) {
    console.log(fruta)
})

/*

    O metodo map é um metodo que cria um novo array com os resultados da chamada de uma função para cada elemento do array.

*/

let numeros = [1, 2, 3, 4, 5]

let numerosDobrados = numeros.map(function (numero) {
    return numero * 2
})

console.log(numerosDobrados) // [ 2, 4, 6, 8, 10 ]


/*

    O metodo filter é um metodo que cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

*/


let idades = [15, 20, 25, 30, 35, 40, 45, 50]

let maioresDe30 = idades.filter(function (idade) {
    return idade > 30
})

console.log(maioresDe30) // [ 35, 40, 45, 50 ]


/*

    O metodo reduce é um metodo que executa uma função para cada elemento do array, resultando num unico valor.

*/

let numeros2 = [1, 2, 3, 4, 5]

let soma = numeros2.reduce(function (acumulador, numero) {
    return acumulador + numero
})

console.log(soma) // 15


/*

    O metodo some é um metodo que verifica se pelo menos um elemento do array passa no teste implementado pela função fornecida.

*/

let numeros3 = [1, 2, 3, 4, 5]

let temNumeroMaiorQue3 = numeros3.some(function (numero) {
    return numero > 3
})

console.log(temNumeroMaiorQue3) // true


/*

    O metodo every é um metodo que verifica se todos os elementos do array passam no teste implementado pela função fornecida.

*/

let numeros4 = [1, 2, 3, 4, 5]

let todosNumerosMaiorQue0 = numeros4.every(function (numero) {
    return numero > 0
})

console.log(todosNumerosMaiorQue0) // true

/*

    O metodo find é um metodo que retorna o primeiro elemento do array que passar no teste implementado pela função fornecida.

*/

let numeros5 = [1, 2, 3, 4, 5]

let numeroMaiorQue3 = numeros5.find(function (numero) {
    return numero > 3
})

console.log(numeroMaiorQue3) // 4

/*

    O metodo findIndex é um metodo que retorna o indice do primeiro elemento do array que passar no teste implementado pela função fornecida.

*/

let numeros6 = [1, 2, 3, 4, 5]

let indiceNumeroMaiorQue3 = numeros6.findIndex(function (numero) {
    return numero > 3
})

console.log(indiceNumeroMaiorQue3) // 3

/*

    O metodo sort é um metodo que ordena os elementos do array.

*/

let frutas2 = ['Maçã', 'Banana', 'Laranja', 'Uva']

frutas2.sort()

console.log(frutas2) // [ 'Banana', 'Laranja', 'Maçã', 'Uva' ]

/*

    O metodo reverse é um metodo que inverte a ordem dos elementos do array.

*/

let frutas3 = ['Maçã', 'Banana', 'Laranja', 'Uva']

frutas3.reverse()

console.log(frutas3) // [ 'Uva', 'Laranja', 'Banana', 'Maçã' ]

/*

    O metodo join é um metodo que junta todos os elementos do array em uma string.

    Podemos separar os elemento de acordo com o que quisermos.

    Como por exemplo, separar por virgula, ou por espaço.

*/

let frutas4 = ['Maçã', 'Banana', 'Laranja', 'Uva']

let frutasString = frutas4.join(', ')

console.log(frutasString) // Maçã, Banana, Laranja, Uva


/*

    O metodo includes é um metodo que verifica se um array contem um determinado elemento.

*/

let frutas5 = ['Maçã', 'Banana', 'Laranja', 'Uva']

let temBanana = frutas5.includes('Banana')

console.log(temBanana) // true

/*

    O metodo split é um metodo que divide uma string em um array de substrings.

*/

let frase = 'O rato roeu a roupa do rei de roma'

let palavras = frase.split(' ')

console.log(palavras) // [ 'O', 'rato', 'roeu', 'a', 'roupa', 'do', 'rei', 'de', 'roma' ]

/*

    O metodo slice é um metodo que retorna uma parte do array.

*/

let frutas6 = ['Maçã', 'Banana', 'Laranja', 'Uva']

let frutasCortadas = frutas6.slice(1, 3)

console.log(frutasCortadas) // [ 'Banana', 'Laranja' ]

/*

    O metodo splice é um metodo que adiciona ou remove elementos do array.

*/

let frutas7 = ['Maçã', 'Banana', 'Laranja', 'Uva']

frutas7.splice(1, 2, 'Manga', 'Pera')

console.log(frutas7) // [ 'Maçã', 'Manga', 'Pera', 'Uva' ]


/*

    O metodo concat é um metodo que junta dois ou mais arrays.

*/

let frutas8 = ['Maçã', 'Banana', 'Laranja', 'Uva']

let frutas9 = ['Manga', 'Pera', 'Melancia', 'Morango']

let frutas10 = frutas8.concat(frutas9)

console.log(frutas10) // [ 'Maçã', 'Banana', 'Laranja', 'Uva', 'Manga', 'Pera', 'Melancia', 'Morango' ]


/*

    O metodo indexOf é um metodo que retorna o primeiro indice em que um elemento pode ser encontrado no array.

*/

let frutas11 = ['Maçã', 'Banana', 'Laranja', 'Uva']

let indiceBanana = frutas11.indexOf('Banana')

console.log(indiceBanana) // 1

