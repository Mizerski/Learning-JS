/*

    Heranças com classes em JavaScript

    O que é herança?

    Herança é um princípio da programação orientada a objetos que permite criar uma nova classe a partir de uma classe existente

    - A nova classe herda atributos e métodos da classe existente
    - A nova classe pode ter novos atributos e métodos
    - A nova classe pode ter métodos com a mesma assinatura da classe existente

    etc...

*/


class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já ligado')
            return
        }

        this.ligado = true
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' já desligado')
            return
        }

        this.ligado = false
    }
}


/*

    Explicando o codigo abaixo

    A classe Smartphone herda os atributos e métodos da classe DispositivoEletronico

    - A classe Smartphone tem um construtor que recebe 3 parâmetros
    - A classe Smartphone tem 2 atributos
    - A classe Smartphone tem um método

    Para que server o super?

    O super é usado para chamar o construtor da classe pai, ou seja, da classe que está sendo herdada

    No caso do código abaixo, o super é usado para chamar o construtor da classe DispositivoEletronico, que faz com que o atributo nome seja inicializado

*/

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10')


class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome)
        this.temWifi = temWifi
    }

    ligar() {
        console.log('Olha, você alterou o método ligar')
    }
}

const t1 = new Tablet('iPad', true)
console.log(t1)