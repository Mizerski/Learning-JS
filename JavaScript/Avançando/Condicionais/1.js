/*
  Condicionais no JavaScript

    Em JavaScript, existem várias condicionais, mas as principais são:

    - if -> usado para executar um bloco de código se uma condição for verdadeira
    - else -> usado para executar um bloco de código se a condição do if for falsa
    - else if -> usado para executar um bloco de código se a condição do if for falsa, mas outra condição for verdadeira

    Estrutura de uma condicional:

    if (condicao) {
        // bloco de codigo
    } else if (condicao) { //So caso a primeira condicao seja falsa
        // bloco de codigo
    }else {
        // bloco de codigo
    }


    Notas:
    - A condicao é uma expressão que retorna verdadeiro ou falso
    - O bloco de código é um conjunto de instruções que são executadas se a condição for verdadeira
    - O bloco de código é delimitado por chaves {}
    - A condicional if é usada para executar um bloco de código se a condição for verdadeira
    - A condicional else é usada para executar um bloco de código se a condição do if for falsa
    - A condicional else if é usada para executar um bloco de código se a condição do if for falsa, mas outra condição for verdadeira
    - O else nao tem condicao, ele é executado caso todas as condicoes anteriores sejam falsas
*/

// Exemplos de condicionais

let idade = 18

if (idade >= 18) {
    console.log('Maior de idade')
}

let sexo = 'F'

if (sexo === 'M') {
    console.log('Masculino')
} else {
    console.log('Feminino')
}

