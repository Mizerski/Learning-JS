/*

    Metodos de instancia e metodos estaticos

    O que são métodos de instância?
    Sao métodos que são chamados a partir de uma instância da classe

    O que são métodos estáticos?
    São métodos que são chamados a partir da classe, ou seja, não são chamados a partir de uma instância da classe

    No exemplo abaixo, o método trocaPilha é um método estático, ou seja, é chamado a partir da classe ControleRemoto, e não a partir de uma instância da classe ControleRemoto

*/

class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    // Método de instância
    aumentarVolume() {
        this.volume += 2
    }

    diminuirVolume() {
        this.volume -= 2
    }

    // Método estático
    static trocaPilha() {
        console.log('Trocar pilha')
    }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()

console.log(controle1)
ControleRemoto.trocaPilha()

/*

    Quando usar uma funçao ou metodo estatico?

    o método estático é usado quando o método não precisa de acesso a nenhum atributo da instância da classe, tambem usado por organização do código.


*/
