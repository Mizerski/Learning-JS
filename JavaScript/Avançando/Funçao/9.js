/*
    Funçao construtora no JavaScript

    Funçao construtora é uma funçao que cria um objeto, ou seja, ela é um molde para criar objetos.

*/

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

let pessoa1 = new Pessoa('João', 'Silva', 30)

/*

    O que acontece é que a funçao construtora cria um objeto, e o this é o objeto que está sendo criado.

    O new é o que cria o objeto, e o que está a direita do new é a funçao construtora.

*/


/*

    Funçao fabrica no JavaScript

    Funçao fabrica é uma funçao que cria um objeto, ou seja, ela é um molde para criar objetos.

    Difere da funçao construtora, pois a funçao fabrica retorna um objeto.

*/

function criarPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
        maiorIdade: 18,
        get idadeMaior() {
            return this.idade >= this.maiorIdade ? 'Maior de idade' : 'Menor de idade'
        }
    }
}

let pessoa2 = criarPessoa('Maria', 'Silva', 17)


/*

    Funçao construtora vs Funçao fabrica, quando usar?

    Funçao construtora é mais utilizada quando queremos criar um objeto que tenha um comportamento, ou seja, que tenha métodos.

    Funçao fabrica é mais utilizada quando queremos criar um objeto que tenha apenas atributos.

*/
