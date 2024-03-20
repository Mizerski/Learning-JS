/*

    Setter no Javascript

    O setter é um método que define o valor de uma propriedade específica.

    Ele é usado para definir o valor de um atributo privado de um objeto.

    Diferente do getter, o setter é definido usando a palavra-chave set seguida pelo nome do atributo que se deseja definir.


*/

// Exemplo de um setter

let pessoa = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 30,
    set nomeCompleto(valor) {

        /* 
            Aqui estamos usando o setter para definir o valor do atributo nomeCompleto.
        
            o Split é um metodo que divide uma string em um array de substrings e retorna o novo array.

            O split é chamado de separador, e pode ser uma string ou uma expressão regular.
        */

        let partes = valor.split(' ')
        this.nome = partes[0]
        this.sobrenome = partes[1]
    }
}

pessoa.nomeCompleto = 'Maria Silva'
console.log(pessoa.nome) // Maria
console.log(pessoa.sobrenome) // Silva

/*

    Dessa forma perceba que o atributo nomeCompleto é um atributo privado, e não pode ser acessado diretamente.

    Ele só pode ser acessado atraves do metodo set nomeCompleto.

    Caso tente acessar diretamente, vai dar erro.

    console.log(pessoa.nomeCompleto) // Maria Silva

    console.log(pessoa.nomeCompleto()) // Error

*/

// Exemplo mais complexo

function criarPessoa(nome, sobrenome, peso, altura, idade) {
    return {
        nome,
        sobrenome,
        peso,
        altura,
        idade,
        set imc(valor) {
            this.peso = valor * (this.altura * this.altura)
        },
        set nomeCompleto(valor) {
            let partes = valor.split(' ')
            this.nome = partes[0]
            this.sobrenome = partes[1]
        },
        set maiorIdade(valor) {
            if (valor >= 18) {
                this.idade = 'Maior de idade'
            }
            else {
                this.idade = 'Menor de idade'
            }
        }
    }
}

let pessoa1 = criarPessoa('João', 'Silva', 80, 1.80, 30)

pessoa1.imc = 24.69

console.log(pessoa1.peso) // 80

pessoa1.nomeCompleto = 'Maria Silva'

console.log(pessoa1.nome) // Maria

console.log(pessoa1.sobrenome) // Silva

pessoa1.maiorIdade = 30

console.log(pessoa1.idade) // Maior de idade

pessoa1.maiorIdade = 17

console.log(pessoa1.idade) // Menor de idade

/*

   Perceba que ao passar o mouse em cima da funcao, ela retorna como any, talvez isso nao seja uma boa pratica para funcoes complexas.

   Podemos resolver isso usando @param


*/

// Exemplo mais complexo, usando @param 


function criarCarro(marca, modelo, ano, cor) {
    return {
        marca,
        modelo,
        ano,
        cor,
        /**
         * @param {number} valor
         * 
         * @example
         * 
         * carro.calcularAno = 2000
         */
        set calcularAno(valor) {
            this.ano = 2021 - valor
        },
    }
}


let carro = criarCarro('Fiat', 'Uno', 2000, 'Vermelho')

carro.calcularAno = 2000

console.log(carro.ano) // 21


/*

    Perceba que ao passar o mouse em cima da funcao, ela retorna como number, isso é uma boa pratica para funcoes complexas.

    Podemos resolver isso usando @param

    Tambem podemos usar @example para mostrar um exemplo de como usar a funcao.

    Tambem podemos usar @returns para mostrar o que a funcao retorna.

*/