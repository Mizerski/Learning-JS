/*

    Herança de objetos

    - Herança é um dos princípios da orientação a objetos
    - É a capacidade de um objeto acessar métodos e propriedades de outro objeto
    - Em JavaScript, a herança é feita através de protótipos
    - Um objeto pode herdar propriedades e métodos de outro objeto
    - A herança é feita através da propriedade __proto__

*/

// Exemplo de herança de objetos

function Carro(marca, preco) {
    this.marca = marca
    this.preco = preco
}

Carro.prototype.descontoPorAno = function (ano) {
    if (ano >= 2020) {
        return this.preco * 0.1
    }
    else if (ano >= 2010) {
        return this.preco * 0.2
    }
    return this.preco * 0.3
}

Carro.prototype.precoComDesconto = function (ano) {
    return `Preço com desconto: R$ ${this.preco - this.descontoPorAno(ano)}`
}

const carro = new Carro('Fiat', 30000)

// Hora de herdar as propriedades e métodos do objeto Carro

function Caminhao(marca, preco, carga) {
    Carro.call(this, marca, preco)
    this.carga = carga
}

Caminhao.prototype = Object.create(Carro.prototype)
Caminhao.prototype.constructor = Caminhao

const caminhao = new Caminhao('Volvo', 100000, 10000)
console.log(caminhao.precoComDesconto(2015))

console.log(caminhao)
/*

    Explicação do código acima

    - O método call(this, argumentos) é usado para chamar um método de um objeto em um contexto diferente
    - No exemplo acima, estamos chamando o método Carro.call(this, marca, preco) no contexto do objeto Caminhao
    - Isso significa que estamos chamando o método Carro no contexto do objeto Caminhao
    - O método Object.create(objeto) cria um novo objeto com o protótipo do objeto passado como argumento
*/