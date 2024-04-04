// Console

//Funcao

// function exbirNome(nome) {
//     return `seu nome e ${nome}`
// }

// console.log(exbirNome("roger"))


// function somarNumeros(a, b) {
//     return a + b
// }
// let num1 = 10
// let num2 = 12

// console.log(somarNumeros(num1, num2))

// Array

// let lista = [1, "2", "3"]

// console.log(typeof lista[0])

// Objetos


// const meuObjeto = {
//     nome: 'Lucas',
//     idade: 25,
//     cidade: "Sao paulo"
// }

// console.log(meuObjeto)


// Arrays de objetos


// const pessoas = [
//     { nome: 'Joao', idade: 30 },
//     { nome: 'Maria', idade: 30 },
// ]

// console.log(pessoas)


// Condicional

// let idade = 17

// if (idade >= 18) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// Switch case


// let dia = 10 // dia da semana

// switch (dia) {
//     case 1:
//         console.log('Domingo')
//         break
//     case 2:
//         console.log('Segunda')
//         break
//     case 3:
//         console.log('Terça')
//         break
//     case 4:
//         console.log('Quarta')
//         break
//     case 5:
//         console.log('Quinta')
//         break
//     case 6:
//         console.log('Sexta')
//         break
//     case 7:
//         console.log('Sabado')
//         break
//     default:
//         console.log('Dia invalido')
// }

// let fruta = 'banana'

// switch (fruta) {
//     case 'banana':
//         console.log('R$ 3,00 / kg')
//         break
//     case 'maçã':
//         console.log('R$ 2,00 / kg')
//         break
//     case 'melancia':
//         console.log('R$ 1,00 / kg')
//         break
//     default:
//         console.log('Produto não existe')
// }



// function somarNumeros(a, b) {
//     return a + b
// }

// function subtrairNumeros(a, b) {
//     return a - b
// }


// // Usando switch case para chamar funcoes


// let operacao = 2

// switch (operacao) {
//     case 1:
//         console.log(somarNumeros(10, 20))
//         break
//     case 2:
//         console.log(subtrairNumeros(20, 10))
//         break
//     default:
//         console.log('Operação inválida')
// }

// function exibirMensagem(opcao){
//     switch (opcao){
//         case 1:
//             console.log('Você escolheu a opção 1')
//             break
//         case 2:
//             console.log('Você escolheu a opção 2')
//             break
//         case 3:
//             console.log('Você escolheu a opção 3')
//             break
//         default:
//             console.log('Opção inválida')
//     }
// }

// exibirMensagem(1)

// Looping


for (let index = 0; index <= 10; index++) {
    console.log(index)
}

let contador = 0

while (contador <= 10) {
    console.log(contador)
    contador++
}