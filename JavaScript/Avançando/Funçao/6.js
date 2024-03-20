/*
    Factory Functions

    Factory functions são funções que retornam objetos.

    Ou seja, elas são usadas para criar objetos que podem ser personalizados de acordo com as necessidades do usuário.
*/

// Exemplo:

function criarPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        falar(assunto) {
            return `${nome} ${sobrenome} está falando sobre ${assunto}`
        }
    }

}

// Cria um objeto pessoa
let pessoa = criarPessoa('João', 'Silva')
console.log(pessoa.falar('Javascript')) // João Silva está falando sobre Javascript

/*
    No exemplo abaixo, a funcao criarCarro recebe tres parametros: marca, modelo e cor. Porem ela tem uma propridade chamada Ano que é fixa em 2000.

    Porem se tentarmos acessar a propridade simplesmente usando :

    ligar() {
            return `O ${marca} ${modelo} ${cor} está ligado e é do ano ${ano}`
     },

    Vai dar erro, pois a variavel ano não foi passada como parametro, e ela não foi definida dentro da função.

    Entao como podemos resolver isso?

*/

function criarCarroSemThis(marca, modelo, cor) {
    return {
        marca,
        modelo,
        cor,
        ligar() {
            return `O ${marca} ${modelo} ${cor} está ligado`
        },
        ano: 2000
    }
}

// Cria um objeto carro

let carro = criarCarroSemThis('Fiat', 'Uno', 'Vermelho')
console.log(carro.ligar()) // O Fiat Uno Vermelho está ligado


/*
    Aqui como podemos resolver o problema da propridade ano.

    Podemos usar o this para referenciar a propridade ano.

    O this é uma palavra-chave que se refere ao objeto atual.

    Vou colocar outro exemplo abaixo porem sem o erro.
*/

function criarCarroComThis(marca, modelo, cor) {
    return {
        marca,
        modelo,
        cor,
        /*
            Percerba que a propridade ano foi definida dentro da função, e ela foi referenciada usando o this.
        */
        ligar() {
            return `O ${marca} ${modelo} ${cor} está ligado e é do ano ${this.ano}`
        },
        ano: 2000
    }
}


// Cria um objeto carro

let carroThis = criarCarroComThis('Fiat', 'Palio', 'Azul')
console.log(carroThis.ligar()) // O Fiat Palio Azul está ligado e é do ano 2000

/*

    Resumindo:
    
    O this de modo geral é usado para referenciar o objeto atual.

    Ou seja, ele é usado para acessar as propriedades e métodos do objeto atual. Sendo ele um objeto global, um objeto de função ou um objeto de método.

*/

/*
    Complexizando um pouco mais.

    Vamos criar uma função que calcula o tempo de uso de um carro.

    A função vai receber 5 parametros: anoLancamento, anoAtual, marca, modelo e cor.

    E vai retornar um objeto com as seguintes propriedades:

    marca, modelo, cor, anoLancamento, anoAtual, calcular e valoPorTempo.

    A propriedade calcular vai retornar uma string com as informações do carro.

    A propriedade valoPorTempo vai retornar uma string com o valor do carro de acordo com o tempo de uso.

    Se o carro tiver menos de 5 anos, ele é novo.

    Se o carro tiver entre 5 e 10 anos, ele é usado.

    Se o carro tiver mais de 10 anos, ele é velho.

    Vou colocar o exemplo abaixo.
*/

function tempoDeUso(anoLancamento, anoAtual, marca, modelo, cor) {
    return {
        marca,
        modelo,
        cor,
        anoLancamento,
        anoAtual,
        calcular() {
            return `O carro é da marca ${marca}, modelo ${modelo}, cor ${cor} e foi lançado em ${anoLancamento} e estamos em ${anoAtual}`
        },
        valoPorTempo() {
            if (anoAtual - anoLancamento < 5) {
                return 'O carro é novo'
            }
            else if (anoAtual - anoLancamento >= 5 && anoAtual - anoLancamento < 10) {
                return 'O carro é usado'
            }
            else {
                return 'O carro é velho'
            }
        }

    }
}

let carroUsado = tempoDeUso('Fiat', 'Palio', 'Azul', 2010, 2021)
console.log(carroUsado.calcular())
console.log(carroUsado.valoPorTempo())

/*

    Perceba que nesse usamos o this para referenciar as propriedades do objeto atual.

    Usamos funções para calcular o tempo de uso do carro.

    Usamos condições para verificar o tempo de uso do carro.

    E retornamos uma string de acordo com o tempo de uso do carro.

    E retornamos um objeto com as informações do carro.

*/