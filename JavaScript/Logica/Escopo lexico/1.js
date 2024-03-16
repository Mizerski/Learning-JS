/*

    Escopo léxico é a forma que o JavaScript "lê" o código, ou seja, ele lê o código de cima para baixo, e de dentro para fora. Isso quer dizer que uma função "filha" tem acesso a variáveis da função "mãe", mas a função "mãe" não tem acesso a variáveis da função "filha".

*/

// Exemplo:

function funcaoExterna() {
    let nome = 'João'
    function funcaoInterna() {
        console.log(nome)
    }
    funcaoInterna()
}

funcaoExterna() // João

/* 
    No exemplo acima, a função funcaoInterna() tem acesso a variável nome, que está no escopo da função funcaoExterna(), mas a função funcaoExterna() não tem acesso a variável nome, que está no escopo da função funcaoInterna().
*/

// Exemplo de erro:

function funcaoExterna() {
    function funcaoInterna() {
        let nome = 'João'
    }
    console.log(nome)
}

funcaoExterna() // ReferenceError: nome is not defined

/*
    No exemplo acima, a função funcaoExterna() não tem acesso a variável nome, que está no escopo da função funcaoInterna().
*/