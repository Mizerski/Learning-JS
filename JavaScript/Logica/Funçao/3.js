// Retorno de funcoes

/*   

    Em JavaScript, uma função pode retornar qualquer tipo de dado, incluindo outras funções.

    Quando usado a palavra-chave return, a função PARA DE EXECUTAR e retorna o valor especificado.

*/

// Exemplo:

function retornaFuncao() {
    return function () {
        console.log('Função retornada')
    }
}

const funcao = retornaFuncao() // retorna a função

funcao() // executa a função retornada

/*   
    O que é o retono de funções?

    O retorno de uma função é o valor que a função retorna quando é chamada.
*/

// Exemplo com retorno

function soma(a, b) {
    return a + b
}

// Exemplo sem retorno

function semRetorno() {
    console.log('Função sem retorno')
}

console.log(soma(10, 20)) // 30
console.log(semRetorno()) // undefined

/*   
   No exemplo dado acima, a função soma() retorna a soma de a e b, enquanto a função semRetorno() não retorna nada, e por isso retorna undefined.

   Cuidado para nao confundir console.log() com return. console.log() é usado para imprimir valores no console, enquanto return é usado para retornar valores de uma função.
*/


/*
 Funçao dentro de funçao

    Em JavaScript, é possível definir funções dentro de outras funções. Isso é útil quando você precisa de uma função que só será usada dentro de outra função.

*/

// Exemplo:

function funcaoExterna() {
    function funcaoInterna() {
        console.log('Função interna')
    }
    funcaoInterna()
}

funcaoExterna() // Função interna

