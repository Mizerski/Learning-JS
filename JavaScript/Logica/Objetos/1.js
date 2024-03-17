/*

    Objeto no Javascript

    - Objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos).

    - Objetos são uma das principais maneiras que a linguagem JavaScript tem de armazenar e manipular dados. A maioria dos objetos em JavaScript são instâncias do objeto Object, que é um objeto global e pode ser construído através do operador new Object e da inicialização usando um objeto literal. O construtor Object cria um wrapper de objeto para o valor fornecido. Se o valor é null ou undefined, ele criará e retornará um objeto vazio, caso contrário, retornará um objeto de um Tipo que corresponde ao valor fornecido.

    - Objetos podem ser pensados como as coisas tangíveis que usamos no mundo real, como um carro, um cachorro, uma caneta, uma xícara, etc. Como esses objetos do mundo real, em JavaScript, objetos também podem conter uma variedade de informações. Eles também podem interagir uns com os outros. Um objeto pode ser passado para uma função como um argumento. Uma função pode ser usada como uma propriedade de um objeto. E assim por diante.

*/


/* 

    Objeto Literal

    - O objeto literal é uma maneira de criar um objeto em JavaScript. Um objeto literal é uma lista de pares de nome/valor (como idade: 25) dentro de chaves {}.

    - A chave (ou nome) é uma string. Cada chave é seguida por um valor, que pode ser de qualquer tipo.

*/


// Exemplo 1: Criando um objeto literal

const pessoa = {
    nome: 'Lucas',
    idade: 25,
    cidade: 'São Paulo'
}

// Acessando as propriedades do objeto

console.log(pessoa.nome) // Lucas
console.log(pessoa.idade) // 25
console.log(pessoa.cidade) // São Paulo


/*

    Criando com o new Object()

    - O construtor Object cria um wrapper de objeto para o valor fornecido. Se o valor é null ou undefined, ele criará e retornará um objeto vazio, caso contrário, retornará um objeto de um Tipo que corresponde ao valor fornecido.

*/

// Exemplo 2: Criando um objeto com o new Object()

const pessoa2 = new Object()

pessoa2.nome = 'Lucas'
pessoa2.idade = 25
pessoa2.cidade = 'São Paulo'

console.log(pessoa2.nome) // Lucas
console.log(pessoa2.idade) // 25
console.log(pessoa2.cidade) // São Paulo


/* 

    Criando com funções construtoras

    - Funções construtoras são usadas para criar novos objetos. O operador new é usado para criar uma instância de um objeto.

    - O this palavra-chave se refere ao objeto que está sendo criado.

*/

// Exemplo 3: Criando um objeto com funções construtoras

function Pessoa(nome, idade, cidade) {
    this.nome = nome
    this.idade = idade
    this.cidade = cidade
}

const pessoa3 = new Pessoa('Lucas', 25, 'São Paulo')

console.log(pessoa3.nome) // Lucas
console.log(pessoa3.idade) // 25
console.log(pessoa3.cidade) // São Paulo


/*
    
        Adicionando métodos
    
        - Além de adicionar propriedades a um objeto, você pode adicionar métodos. Métodos são funções que pertencem a um objeto.
    
 */

// Exemplo 4: Adicionando métodos

const pessoa4 = {
    nome: 'Lucas',
    idade: 25,
    cidade: 'São Paulo',
    falar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    }
}

pessoa4.falar() // Olá, meu nome é Lucas e eu tenho 25 anos.

// Exemplo abaixo é uma forma de adicionar métodos em funções construtoras

pessoa4.falarNovamente = function () {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
}


pessoa4.falarNovamente() // Olá, meu nome é Lucas e eu tenho 25 anos.


/*

    Acessando propriedades e métodos

    - Você pode acessar as propriedades e métodos de um objeto usando a notação de ponto (.).

*/


// Exemplo 5: Acessando propriedades e métodos

const pessoa5 = {
    nome: 'Lucas',
    idade: 25,
    cidade: 'São Paulo',
    falar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    }
}

console.log(pessoa5.nome) // Lucas
console.log(pessoa5.idade) // 25
console.log(pessoa5.cidade) // São Paulo
pessoa5.falar() // Olá, meu nome é Lucas e eu tenho 25 anos.


/*

    Palavra-chave this

    - A palavra-chave this se refere ao objeto atual. Em um método, this se refere ao objeto proprietário.

    - Em uma função comum, this se refere ao objeto global.

    - Em um evento, this se refere ao elemento que recebeu o evento.

    - Sozinho, this se refere ao objeto global.

    - Em uma função, this se refere ao objeto global.

    - Em uma função, this se refere ao objeto que "possui" a função.

    - Se uma função é chamada com o new, this se refere ao objeto recém-criado.

    - Em um método, this se refere ao objeto "dono" do método.

    - Em um evento, this se refere ao elemento que recebeu o evento.

    - Métodos como call(), e apply() podem referir this a qualquer objeto.

*/


// Exemplo 6: Palavra-chave this

const pessoa6 = {
    nome: 'Lucas',
    idade: 25,
    cidade: 'São Paulo',
    falar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    }
}

pessoa6.falar() // Olá, meu nome é Lucas e eu tenho 25 anos.


/*

    Como ver as chaves de um objeto

    - O método Object.keys() retorna um array de propriedades enumeráveis de um determinado objeto, na mesma ordem em que é fornecida por um loop for...in (a diferença é que um loop for-in enumera propriedades no protótipo do objeto).

*/


// Exemplo 7: Como ver as chaves de um objeto

const pessoa7 = {
    nome: 'Lucas',
    idade: 25,
    cidade: 'São Paulo',
    falar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    }
}

console.log(Object.keys(pessoa7)) // [ 'nome', 'idade', 'cidade', 'falar' ]

// Usando o for...in

for (let chave in pessoa7) {
    console.log(chave) // nome idade cidade falar
}

