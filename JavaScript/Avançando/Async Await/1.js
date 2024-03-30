/*
    Async/Await no JavaScript

    Async/Await é uma forma de escrever código assíncrono de forma mais clara e legível.

    O async é uma palavra-chave que pode ser utilizada para definir uma função como assíncrona. Funções assíncronas sempre retornam uma promise, e o valor retornado pela função é o valor resolvido da promise.

    O await é uma palavra-chave que só pode ser utilizada
    dentro de funções assíncronas. O await pausa a execução da função assíncrona até que a promise passada como argumento seja resolvida.

*/

function obterUsuario(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Erro na requisição!');
            return;
        }
        setTimeout(() => {
            resolve(msg)
        }, tempo);

    });

}
/*

    O async nessa função é utilizado para definir a função
    como assíncrona. A função obterUsuarios retorna uma promise, e o valor retornado pela função é o valor resolvido da promise.

    async function obterUsuarios() {
        const usuario1 = await obterUsuario('Usuario 1', 1000);
        console.log(usuario1);
        const usuario2 = await obterUsuario('Usuario 2', 500);
        console.log(usuario2);
        const usuario3 = await obterUsuario('Usuario 3', 3000);
        console.log(usuario3);
    }

obterUsuarios();

*/


// Agora usando com o try/catch

async function obterUsuarios() {
    try {
        const usuario1 = await obterUsuario('Usuario 1', 1000);
        console.log(usuario1);
        const usuario2 = await obterUsuario('Usuario 2', 500);
        console.log(usuario2);
        const usuario3 = await obterUsuario('Usuario 3', 3000);
        console.log(usuario3);
    } catch (err) {
        console.log(err);
    }
}

obterUsuarios();