/*

    Declarando variáveis em JavaScript

    Variáveis são usadas para armazenar valores em JavaScript.

    Podemos declarar variáveis em JavaScript usando a palavra-chave let e var, mas qual é a diferença entre elas?

    A diferença entre let e var é que let é uma variável local, e var é uma variável global.

    Estrutura de uma variável:

        let nomeDaVariavel = valorDaVariavel

*/

// Exemplo de variável com let

let nome = 'João'

console.log(nome) // João

// Exemplo de variável com var

var idade = 30

console.log(idade) // 30


/*

    Variáveis podem ser declaradas sem valor, mas isso não é recomendado.

    Variáveis que são declaradas sem valor são inicializadas com o valor undefined.


*/

// Exemplo de variável declarada sem valor

let sexo

console.log(sexo) // undefined

// Exemplo de variável declarada sem valor


/*

  Mas podemos declarar variáveis sem valor e depois atribuir um valor a elas.

*/


// Exemplo de variável declarada sem valor

let cidade

cidade = 'São Paulo'

console.log(cidade) // São Paulo