/*

    Classes no JavaScript

    O que são classes?

    - Classes são modelos para criar objetos
    - Classes são consideradas funções
    - Classes podem ter um construtor
    - Classes podem ter métodos
    - Classes podem ter getters e setters
    - Classes podem ter herança

    etc...

*/


class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
}


const p1 = new Pessoa('Luiz', 'Otávio')
console.log(p1)

/*

    O que é o constructor?

    - O constructor é um método especial para criar e inicializar um objeto criado a partir de uma classe
    - O constructor é chamado automaticamente quando um novo objeto é criado
    - O constructor é chamado com a palavra-chave new

*/

function criarPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        falar() {
            return `${this.nome} está falando`
        },
        comer() {
            return `${this.nome} está comendo`
        },
        beber() {
            return `${this.nome} está bebendo`
        }
    }
}


class criarPessoa2 {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
    falar() {
        return `${this.nome} está falando`
    }
    comer() {
        return `${this.nome} está comendo`
    }
    beber() {
        return `${this.nome} está bebendo`
    }
}


/* 

    Qual a maior diferença do criarPessoa e criarPessoa2?

    A classe diferente da função construtora, já cria um prototype para os métodos, enquanto a função construtora cria um novo objeto para cada método.

    ou seja, a classe é mais eficiente em termos de memória e processamento.
   
*/


/*

    Getters e Setters em classes

    - Getters e Setters são métodos especiais de uma classe
    - Getters e Setters são usados para obter e definir valores
    - Getters e Setters são usados para proteger dados sensíveis

*/


// Contruindo uma classe de atributos de um inimigo rpg

class Inimigo {
    constructor(nome, vida, ataque) {
        this.nome = nome
        this.vida = vida
        this.ataque = ataque
    }
    set dano(dano) {
        this.vida -= dano
    }
    set atacar(ataque) {
        this.ataque = ataque
    }
    get info() {
        if (this.vida <= 0) {
            return `${this.nome} morreu`
        }
        return `${this.nome} tem ${this.vida} de vida`
    }
    get danoInfo() {
        return `${this.nome} tem ${this.ataque} de ataque`
    }
    atacarInimigo(inimigo) {
        inimigo.dano = this.ataque
    }
    receberDano(dano) {
        this.vida -= dano
    }


}

/*

    Agora vamos criar um jogador porem com o uso de []

    O uso de [] é para proteger o atributo, ou seja, ele não pode ser acessado diretamente, apenas por métodos.

    Quando usar e por que usar?

    - Quando queremos proteger um atributo
    - Quando queremos proteger um atributo de ser acessado diretamente
    - Quando queremos proteger um atributo de ser modificado diretamente
    - Quando queremos proteger um atributo de ser deletado diretamente

*/

const _vida = Symbol('vida')
const _ataque = Symbol('ataque')

class Jogador {
    constructor(nome, vida, ataque) {
        this.nome = nome
        this[_vida] = vida
        this[_ataque] = ataque
    }
    set dano(dano) {
        this[_vida] -= dano
    }
    set atacar(ataque) {
        this[_ataque] = ataque
    }
    get info() {
        if (this[_vida] <= 0) {
            return `${this.nome} morreu`
        }
        return `${this.nome} tem ${this[_vida]} de vida`
    }
    get danoInfo() {
        return `${this.nome} tem ${this[_ataque]} de ataque`
    }
    atacarInimigo(inimigo) {
        inimigo.dano = this[_ataque]
    }
    receberDano(dano) {
        this[_vida] -= dano
    }
}


const inimigo1 = new Inimigo('Orc', 100, 10)
const jogador1 = new Jogador('Luiz', 100, 10)

/*

    Agora com o uso de [] o atributo vida e ataque não podem ser acessados diretamente, apenas por métodos.

    Isso evita que o atributo seja modificado diretamente, ou seja, protege o atributo.

    Erros como jogador1.vida = 100, não irá funcionar.

    Isso é uma forma de proteger o atributo.

*/

