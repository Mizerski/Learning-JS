/*

    Factory function ou Constructor function?

    - Factory function é uma função que retorna um objeto.
    - Constructor function é uma função que cria um objeto.

    - A principal diferença entre elas é que a factory function retorna um novo objeto, enquanto a constructor function usa a palavra-chave new para criar um objeto.

    - A factory function é mais simples e direta, enquanto a constructor function é mais complexa e flexível.

*/

// Exemplo usando factory function

function criarPessoa(nome, idade, cidade) {
    return {
        nome,
        idade,
        cidade
    }
}

const pessoa = criarPessoa('Lucas', 25, 'São Paulo')


// Exemplo usando constructor function

function Pessoa(nome, idade, cidade) {
    this.nome = nome
    this.idade = idade
    this.cidade = cidade
}

const pessoa_ = new Pessoa('Lucas', 25, 'São Paulo')


/*

    Usando getters e setters no construtor e na factory function

    - Getters e setters são usados para acessar e modificar propriedades de um objeto.

*/


// Exemplo usando factory function

function criandoGetSet(nome, idade, cidade) {
    return {
        get nome() {
            return nome
        },
        set nome(novoNome) {
            nome = novoNome
        },
        get idade() {
            return idade
        },
        set idade(novaIdade) {
            idade = novaIdade
        },
        get cidade() {
            return cidade
        },
        set cidade(novaCidade) {
            cidade = novaCidade
        }
    }
}

const pessoa__ = criandoGetSet('Lucas', 25, 'São Paulo')

console.log(pessoa__.nome) // Lucas
console.log(pessoa__.idade) // 25
console.log(pessoa__.cidade) // São Paulo

pessoa__.nome = 'João'
pessoa__.idade = 30
pessoa__.cidade = 'Rio de Janeiro'


// Exemplo usando constructor function

function Pessoa_(nome, idade, cidade) {
    this.nome = nome
    this.idade = idade
    this.cidade = cidade
}

Object.defineProperty(Pessoa_.prototype, 'nome', {
    get() {
        return this._nome
    },
    set(novoNome) {
        this._nome = novoNome
    }
})

Object.defineProperty(Pessoa_.prototype, 'idade', {
    get() {
        return this._idade
    },
    set(novaIdade) {
        this._idade = novaIdade
    }
})

Object.defineProperty(Pessoa_.prototype, 'cidade', {
    get() {
        return this._cidade
    },
    set(novaCidade) {
        this._cidade = novaCidade
    }
})

const pessoa___ = new Pessoa_('Lucas', 25, 'São Paulo')


/*

  Quando usar factory function e quando usar constructor function?

    - Use factory function quando você quiser criar um objeto simples e direto.

    - Use constructor function quando você quiser criar um objeto complexo e flexível.

*/


/*

    Comportamento do this e do new

    - O this é uma palavra-chave que se refere ao objeto atual.

    - O new é um operador que cria uma instância de um objeto.

    - O comportamento do this e do new é diferente em cada caso.

    - O this se refere ao objeto que está sendo criado.

    - O new cria uma instância de um objeto.

*/


// Exemplo


function Carro(marca, ano) {
    this.marca = marca
    this.ano = ano
}


const carro = new Carro('Fiat', 2018)

console.log(carro.marca) // Fiat
console.log(carro.ano) // 2018

const carro2 = new Carro('Ford', 2020)

console.log(carro2.marca) // Ford
console.log(carro2.ano) // 2020





