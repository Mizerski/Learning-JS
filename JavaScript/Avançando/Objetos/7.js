/*


    Factory Function + Prototypes no JavaScript

    - Factory Function é uma função que retorna um objeto
    - Podemos criar objetos com métodos e propriedades
    - Podemos usar prototypes para herdar propriedades e métodos
    - Podemos usar o Object.create() para herdar propriedades e métodos
    - Podemos usar o Object.assign() para herdar propriedades e métodos
    - Podemos usar o Object.setPrototypeOf() para herdar propriedades e métodos
    - Podemos usar o new para criar objetos


*/


function criarPessoa(nome, sobrenome) {
    const prototypePessoa = {
        falar() {
            return `${this.nome} está falando`
        },
        comer() {
            return `${this.nome} está comendo`
        },
        beber() {
            return `${this.nome} está bebendo`
        },
    }
    return Object.create(prototypePessoa, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    })
}

const pessoa = criarPessoa('Luiz', 'Otávio')
console.log(pessoa.falar())
console.log(pessoa.comer())
console.log(pessoa.beber())

/*

    Explicando tudo que foi feito no criarPessoa:

    - Criamos uma função chamada criarPessoa
    - Dentro da função, criamos um objeto chamado prototypePessoa
    - Dentro do prototypePessoa, criamos métodos
    - Retornamos um objeto criado com Object.create
    - Passamos o prototypePessoa como primeiro argumento
    - Passamos um objeto com propriedades como segundo argumento
    - O primeiro argumento é o prototype do objeto
    - O segundo argumento são as propriedades do objeto

*/