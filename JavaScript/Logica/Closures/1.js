/*
    Closures no Javascript são funções que se referem a variáveis livres no contexto léxico em que foram criadas.

    Closures são úteis para criar funções que podem acessar variáveis de um escopo externo, mesmo após a função ter sido executada.

    Closures são usadas para criar funções que podem "lembrar" do ambiente em que foram criadas.


*/

// Exemplo:

function funcaoExterna() {
    let nome = 'João'
    function funcaoInterna() {
        console.log(nome)
    }
    return funcaoInterna
}

let funcao = funcaoExterna()
funcao() // João

/*

    No exemplo acima, a função funcaoInterna() tem acesso a variável nome, que está no escopo da função funcaoExterna(), mesmo após a função ter sido executada.

*/



