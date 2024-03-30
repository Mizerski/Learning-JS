/*

    As promises são uma forma de lidar com código assíncrono, e são uma forma de lidar com o callback hell.

    Uma promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona. Uma promise é um objeto retornado para informar o resultado de uma operação assíncrona.

    Uma promise pode estar em um dos três estados:
    - Pendente: Estado inicial, não foi realizada e nem rejeitada
    - Realizada: A operação assíncrona foi realizada com sucesso
    - Rejeitada: A operação assíncrona falhou

    Uma promise é criada com a função construtora Promise, e recebe como argumento uma função que recebe dois parâmetros, resolve e reject. A função passada para a Promise é executada imediatamente, e pode realizar qualquer operação assíncrona, como uma requisição HTTP, por exemplo.

*/

/*
    Explicando o código:

    - A função obterUsuario recebe dois parâmetros, msg e tempo. Ela retorna uma promise, que executa a função passada como argumento imediatamente. Essa função recebe dois parâmetros, resolve e reject. A função setTimeout é utilizada para sim

    - A função obterUsuario é chamada com os argumentos 'Usuario 1' e 1000. O método then é encadeado para a promise retornada por obterUsuario, e recebe uma função que recebe o valor resolvido pela promise. Essa função exibe o valor resolvido no console, e então chama obterUsuario novamente, com os argumentos 'Usuario 2' e 500. O método then é encadeado novamente, e recebe uma função que exibe o valor resolvido no console, e então chama obterUsuario novamente, com os argumentos 404 e 3000. O método then é encadeado novamente, e recebe uma função que exibe o valor resolvido no console.

    - Se ocorrer um erro em qualquer uma das promises, o método catch é chamado, e recebe uma função que exibe o erro no console.

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

obterUsuario('Usuario 1', 1000)
    .then(res => {
        console.log(res);
        return obterUsuario('Usuario 2', 500);
    })
    .then(res => {
        console.log(res);
        return obterUsuario(404, 3000);
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });

// A promise obterUsuario é rejeitada, e o método catch é chamado, exibindo o erro no console

/* 

    Metodo all

    O método Promise.all recebe um array de promises, e retorna uma nova promise que é resolvida quando todas as promises do array são resolvidas, ou rejeitada quando uma das promises do array é rejeitada.

*/


const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 1');
    }, 1000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 2');
    }, 2000);
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 3');
    }, 3000);
});

Promise.all([promise1, promise2, promise3])
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });



/*

    Metodo race

    O método race recebe um array de promises, e retorna uma nova promise que é resolvida ou rejeitada quando a primeira promise do array é resolvida ou rejeitada.

*/


const promise4 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 4');
    }, 1000);
});

const promise5 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 5');
    }, 2000);
});

const promise6 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 6');
    }, 3000);
});

Promise.race([promise4, promise5, promise6])
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });



