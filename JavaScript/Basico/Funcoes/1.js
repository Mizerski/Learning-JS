/*
    Funcao basica no JavaScript

    Funcao é um bloco de codigo que pode ser chamado em qualquer parte do codigo

    Funcoes sao usadas para executar um bloco de codigo varias vezes

    Funcoes sao usadas para executar um bloco de codigo quando algo acontece, como quando um botao é clicado, ou quando uma pagina é carregada

    Estrutura de uma funcao:

    function nomeDaFuncao(parametro) {
        // bloco de codigo
    }

*/

// Exemplo de uma funcao basica

function mostrarMensagem() {
    console.log('Mostrando uma mensagem')
}

// Exemplo de funcao com parametro

function mostrarNome(nome) {
    console.log('O nome é: ' + nome)
}


// Exemplo de funcao com retorno

function somar(a, b) {
    return a + b
}


// Exemplo de uso de funcoes

mostrarMensagem() // Mostrando uma mensagem

mostrarNome('João') // O nome é: João

console.log(somar(2, 3)) // 5