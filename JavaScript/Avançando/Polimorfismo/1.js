/*

    Polimorfismo no JavaScript

    - Polimorfismo é um dos princípios da orientação a objetos
    - É a capacidade de um objeto se comportar de diferentes formas
    - Em JavaScript, o polimorfismo é feito através de herança de objetos
    - Um objeto pode herdar propriedades e métodos de outro objeto

*/


function ContaBancaria(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

ContaBancaria.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        return 'Saldo insuficiente'
    }
    this.saldo -= valor
    return `Saldo atual: R$ ${this.saldo}`
}

ContaBancaria.prototype.depositar = function (valor) {
    this.saldo += valor
    return `Saldo atual: R$ ${this.saldo}`
}

ContaBancaria.prototype.verSaldo = function () {
    return `Saldo: R$ ${this.saldo} da agência: ${this.agencia} e conta: ${this.conta}`
}

function ContaCorrente(agencia, conta, saldo, limite) {
    ContaBancaria.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorrente.prototype = Object.create(ContaBancaria.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        return `Saldo insuficiente: R$ ${this.saldo}`
    }
    this.saldo -= valor
    return `Saldo atual: R$ ${this.saldo}`
}

const cc = new ContaCorrente(11, 22, 0, 100)
console.log(cc)
console.log(cc.sacar(10))
console.log(cc.sacar(90))
console.log(cc.sacar(10))
console.log(cc.depositar(500))
console.log(cc.verSaldo())


/*

    Explicando tudo que foi feito:

    - Criamos uma função construtora chamada ContaBancaria
    - Adicionamos propriedades e métodos ao protótipo da função
    - Criamos uma função construtora chamada ContaCorrente
    - Chamamos a função ContaBancaria dentro de ContaCorrente usando call
    - Usamos Object.create para criar um novo objeto que herda ContaBancaria
    - Setamos o construtor do protótipo de ContaCorrente para ContaCorrente

    ou seja, a função ContaCorrente herda todas as propriedades e métodos de ContaBancaria

*/