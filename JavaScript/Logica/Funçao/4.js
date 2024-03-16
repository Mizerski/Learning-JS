/*
    Funçao de callback é uma função que é passada como argumento para outra função.

    Funções de callback são usadas para executar código após um evento ou uma requisição assíncrona.

    Funções de callback são usadas para criar funções que podem ser executadas em um determinado momento.

*/

// Exemplo:

function funcaoExterna(callback) {
    callback()
}

function funcaoInterna() {
    console.log('Função de callback')
}

funcaoExterna(funcaoInterna) // Função de callback

/*
    
        No exemplo acima, a função funcaoInterna() é passada como argumento para a função funcaoExterna(), e é executada dentro da função funcaoExterna().
    
*/

// Exemplo de uso de funções de callback

function buscarUsuario(id, callback) {

    /*
        O setTimeout é usado para simular uma requisição assíncrona, e após 1 segundo, a função callback é executada.
    
        O setTimeout é uma função que executa um bloco de código após um determinado tempo.
    */

    setTimeout(() => {
        callback({ id: id, nome: 'João' })
    }, 1000)
}

function buscarEndereco(usuario, callback) {
    setTimeout(() => {
        callback({ ...usuario, endereco: 'Rua A' })
    }, 1000)
}

function buscarTelefone(usuario, callback) {
    setTimeout(() => {
        callback({ ...usuario, telefone: '1234-5678' })
    }, 1000)
}

buscarUsuario(1, usuario => {
    buscarEndereco(usuario, usuario => {
        buscarTelefone(usuario, usuario => {
            console.log(usuario)
        })
    })
})


/*
    No exemplo acima, a função buscarUsuario() é executada, e após 1 segundo, a função buscarEndereco() é executada, e após 1 segundo, a função buscarTelefone() é executada, e após 1 segundo, o usuário é exibido no console.

    O uso de funções de callback é muito comum em requisições assíncronas, como requisições HTTP, leitura de arquivos, etc.

    No caso do exemplo o callback é usado para garantir que a função buscarEndereco() só será executada após a função buscarUsuario() ter sido executada, e a função buscarTelefone() só será executada após a função buscarEndereco() ter sido executada. Garantindo assim que o usuário só será exibido no console após todas as informações terem sido buscadas.

    Mas se acontecer de umas das funções não ser executada, o código não irá funcionar corretamente, para resolver isso podemos usar Promises, Async/Await, ou bibliotecas como o Axios.

*/



/*
    O que é uma Promise?

    Promiso no português significa promessa, e é exatamente isso que uma Promise é, uma promessa de que algo será executado, e que após a execução, algo será retornado.

    Promises são usadas para executar código assíncrono, e são usadas para criar funções que podem ser executadas em um determinado momento.

    A Promise pode ter 3 estados:
        - Pendente: estado inicial, quando a Promise está executando
        - Resolvida: estado quando a Promise é executada com sucesso
        - Rejeitada: estado quando a Promise é executada com erro
    A Estrutura de uma Promise é a seguinte:

    new Promise((resolve, reject) => {
        // Código assíncrono
    })

*/

// Exemplo usando Promises


function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            /*
                O que o resolve faz?
            
                O resolve é usado para retornar um valor de uma Promise, e é usado para retornar o valor de uma Promise que foi executada com sucesso.
            */
            resolve({ id: id, nome: 'João' })
        }, 1000)
    })
}

function buscarEndereco(usuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ ...usuario, endereco: 'Rua A' })
        }, 1000)
    })
}

function buscarTelefone(usuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ ...usuario, telefone: '1234-5678' })
        }, 1000)
    })
}

buscarUsuario(1)
    .then(usuario => buscarEndereco(usuario))
    .then(usuario => buscarTelefone(usuario))
    .then(usuario => console.log(usuario))

/*
    No exemplo acima, a função buscarUsuario() é executada, e após 1 segundo, a função buscarEndereco() é executada, e após 1 segundo, a função buscarTelefone() é executada, e após 1 segundo, o usuário é exibido no console.
*/


// Exemplo de erro usando Promises

function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            /*
                O que o reject faz?
            
                O reject é usado para retornar um erro de uma Promise, e é usado para retornar o erro de uma Promise que foi executada com erro.
            */
            reject('Erro ao buscar usuário')
        }, 1000)
    })
}

function buscarEndereco(usuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Erro ao buscar endereço')
        }, 1000)
    })
}

function buscarTelefone(usuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Erro ao buscar telefone')
        }, 1000)
    })
}

buscarUsuario(1)
    .then(usuario => buscarEndereco(usuario))
    .then(usuario => buscarTelefone(usuario))
    .then(usuario => console.log(usuario))
    .catch(erro => console.log(erro)) // Erro ao buscar usuário

/*
    No exemplo acima, a função buscarUsuario() é executada, e após 1 segundo, a função buscarEndereco() é executada, e após 1 segundo, a função buscarTelefone() é executada, e após 1 segundo, o erro é exibido no console.

    Por que o erro é exibido no console?

    Porque a função buscarUsuario() retorna um erro, e o erro é capturado pelo método catch().

    O método catch() é usado para capturar erros que acontecem durante a execução de uma Promise.

*/


