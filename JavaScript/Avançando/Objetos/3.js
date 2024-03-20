/*

    Como usar o metodo defineProperty para criar getters e setters

    para que serve o metodo defineProperty?

    - O método Object.defineProperty() define uma nova propriedade diretamente em um objeto, ou modifica uma propriedade já existente em um objeto, e retorna o objeto.

    - O método defineProperty() permite controlar melhor as propriedades de um objeto.

    - O método defineProperty() aceita três argumentos:

        - O objeto que terá a propriedade definida ou modificada.
        - O nome da propriedade.
        - Um objeto que descreve a propriedade.

    - O objeto que descreve a propriedade pode conter as seguintes propriedades:
    
            - value: O valor da propriedade.
            - writable: Se a propriedade pode ser alterada ou não.
            - enumerable: Se a propriedade pode ser enumerada ou não.
            - configurable: Se a propriedade pode ser deletada ou não.

    - O método defineProperty() também pode ser usado para criar getters e setters.


    De modo cru essa é a sintaxe do metodo defineProperty:
        Object.defineProperty(obj, prop, descriptor)

*/


// Recaptulando o que é uma propriedade publica

function Pessoa(nome, idade, cidade) {
    this.nome = nome
    this.idade = idade
    this.cidade = cidade
}

const pessoa = new Pessoa('Lucas', 25, 'São Paulo')


/*
    Todos os atributos de um objeto são públicos por padrão, ou seja, podem ser acessados e modificados de fora do objeto.
*/


// Agora vamos usar o defineProperty para criar getters e setters

function Pessoa_(nome, idade, cidade, salario) {
    /*
     o This é uma referência ao objeto que será criado.
    */
    Object.defineProperty(this, 'nome', {
        /*
        O atributo enumerable define se a propriedade pode ser enumerada por um loop for...in ou não.
        */
        enumerable: true,
        /*
        O atributo configurable define se a propriedade pode ser deletada ou não.       
        */
        configurable: true,
        get: function () {
            return nome
        },
        set: function (novoNome) {
            nome = novoNome
        }
    })

    Object.defineProperty(this, 'idade', {
        enumerable: true,
        configurable: true,
        get: function () {
            return idade
        },
        set: function (novaIdade) {
            idade = novaIdade
        }
    })

    Object.defineProperty(this, 'cidade', {
        enumerable: true,
        configurable: true,
        get: function () {
            return cidade
        },
        set: function (novaCidade) {
            cidade = novaCidade
        }
    })

    Object.defineProperties(this, 'salario', {
        enumerable: true,
        configurable: true,
        /*
            O atributo value define o valor da propriedade.
        */
        value: salario,
        writable: true, // Se a propriedade pode ser alterada ou não.
        get: function () {
            return salario
        },
        set: function (novoSalario) {
            salario = novoSalario
        }

    })
}

const pessoa_ = new Pessoa_('Lucas', 25, 'São Paulo', 5000)

console.log(pessoa_.nome) // Lucas
console.log(pessoa_.idade) // 25
console.log(pessoa_.cidade) // São Paulo
console.log(pessoa_.salario) // 5000

pessoa_.nome = 'João'
pessoa_.idade = 30
pessoa_.cidade = 'Rio de Janeiro'
pessoa_.salario = 6000

