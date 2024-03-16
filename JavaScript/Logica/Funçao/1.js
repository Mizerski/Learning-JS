
/*
 Function hoisting

 A declaração de função é “levantada” (hoisted) para o topo do contexto de execução. Isso significa que a função pode ser chamada antes de ser declarada.	

*/

// Exemplo:

fazAlgumaCoisa()

function fazAlgumaCoisa() {
    console.log('Fazendo alguma coisa')
}


/*

 First-class objects

 Em JavaScript, funções são objetos de primeira classe, o que significa que elas podem ser passadas como argumentos para outras funções, retornadas por outras funções e atribuídas a variáveis.

*/

// Exemplo:

const soma = function (a, b) {
    return a + b
}

// Passando uma função como argumento para outra função
function calcular(a, b, operacao) {
    return operacao(a, b)
}

console.log(calcular(10, 20, soma))

/*

 Arrow functions

    Arrow functions são uma forma mais curta de escrever funções em JavaScript. Elas são especialmente úteis quando você precisa passar uma função como argumento para outra função.

*/

// Exemplo:

const funcaoArrow = (a, b) => {
    return a + b
}

console.log(funcaoArrow(10, 20))

// Exemplo de passagem de função como argumento para outra função
function calcular(a, b, operacao) {
    return operacao(a, b)
}

// Passando uma arrow function como argumento para outra função

console.log(calcular(10, 20, (a, b) => a + b))

/*
 Anoniymous functions

    Funções anônimas são funções que não têm um nome. Elas são úteis quando você precisa passar uma função como argumento para outra função, mas não precisa chamá-la em outros lugares do código.

*/

// Exemplo:

const somar = function (a, b) {
    return a + b
}

console.log(somar(10, 20))

/*
 functions dentro de objetos

    Em JavaScript, você pode definir funções dentro de objetos. Essas funções são chamadas de métodos.
    Elas podem ser uteis quando você precisa encapsular a lógica de um objeto.

*/

// Exemplo:

const objeto = {
    nome: 'Objeto',
    metodo: function () {
        console.log('Executando método')
    }
}

objeto.metodo()