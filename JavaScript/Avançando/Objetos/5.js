/*

    Prototypes são a base de herança em JavaScript

    Todos os objetos em JavaScript herdam propriedades e métodos de um protótipo.

    O objeto protótipo é também um objeto.

*/

// Usando o prototype para criar um método -> moldes para criar objetos

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
}

// Criando um objeto a partir do molde Pessoa (instancia)

const pessoa = new Pessoa('Lucas', 'Fernando')
const pessoa2 = new Pessoa('Maria', 'Fernanda')


console.log(pessoa.nomeCompleto())
console.log(pessoa2.nomeCompleto())


// Criando um método no prototype

Pessoa.prototype.apelido = 'Lucas'

console.log(pessoa.apelido)


// Avançando e arrumando o objeto Pessoa para que o método nomeCompleto seja criado no prototype

/*

    Explicaçao de performance

    Quando criamos um método dentro do objeto, toda vez que criamos uma nova instância, o método é criado novamente.

    Quando criamos um método no prototype, o método é criado apenas uma vez e todas as instâncias podem acessar o método.

*/


function PessoaComPrototype(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

PessoaComPrototype.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome
}

const pessoa3 = new PessoaComPrototype('Lucas', 'Fernando')
const pessoa4 = new PessoaComPrototype('Maria', 'Fernanda')

console.log(pessoa3.nomeCompleto())

console.log(pessoa4.nomeCompleto())

/*

    Manipulando protótipos

    É possível manipular protótipos de objetos em JavaScript.

    Podemos adicionar, remover ou modificar propriedades e métodos de um protótipo.

    Podemos acessar o protótipo de um objeto através da propriedade __proto__.

*/

// Exemplo de manipulação de protótipos

const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
}

Object.setPrototypeOf(objB, objA)

console.log(objB.chaveA)

/*

    Explicaçao do codigo acima

    O método setPrototypeOf(objeto, prototipo) define o protótipo de um objeto.

    No exemplo acima, o objeto objB passa a ter o objeto objA como protótipo.

    Isso significa que o objeto objB herda todas as propriedades e métodos do objeto objA.

*/

// Exemplo de manipulação de protótipos

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const produto = new Produto('Camiseta', 50)

// Criando um objeto com o protótipo do objeto Produto
const produto2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(produto2, Produto.prototype)
// Colocando o protótipo do objeto produto2 como o protótipo do objeto Produto

produto.desconto(10)
produto2.desconto(10)

console.log(produto)
console.log(produto2)

// Criando objetos com Object.create
const produto3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Bermuda'
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
})

produto3.desconto(10)

console.log(produto3)