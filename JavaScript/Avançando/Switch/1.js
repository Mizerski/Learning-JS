/*

    No Javascript quando tempos muitas opções de escolha, podemos usar o switch para simplificar o código.

    O switch é uma estrutura de controle que permite a execução de diferentes blocos de código, dependendo do valor de uma variável.

    O switch avalia uma expressão, combinando o valor da expressão com a cláusula case, e executa as instruções associadas ao case correspondente.

*/

// Exemplo:

let dia = 3 // 1 - Domingo, 2 - Segunda, 3 - Terça, 4 - Quarta, 5 - Quinta, 6 - Sexta, 7 - Sábado

switch (dia) {
    case 1:
        console.log('Domingo')
        break
    case 2:
        console.log('Segunda')
        break
    case 3:
        console.log('Terça')
        break
    case 4:
        console.log('Quarta')
        break
    case 5:
        console.log('Quinta')
        break
    case 6:
        console.log('Sexta')
        break
    case 7:
        console.log('Sábado')
        break
    default:
        console.log('Dia inválido')
}



// Exemplo de uso do switch com strings

let fruta = 'banana'

switch (fruta) {
    case 'banana':
        console.log('R$ 3,00 / kg')
        break
    case 'maçã':
        console.log('R$ 2,00 / kg')
        break
    case 'melancia':
        console.log('R$ 1,00 / kg')
        break
    default:
        console.log('Produto não existe')
}

// Exemplo usando switch para chamar funções

function somarNumeros(a, b) {
    return a + b
}

function subtrairNumeros(a, b) {
    return a - b
}

let operacao = 1

switch (operacao) {
    case 1:
        console.log(somarNumeros(10, 20))
        break
    case 2:
        console.log(subtrairNumeros(10, 20))
        break
    default:
        console.log('Operação inválida')
}

