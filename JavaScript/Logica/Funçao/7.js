/*
    Getter no JavaScript

    Getter é um método que permite a leitura de um atributo privado de um objeto.

    Ele é usado para acessar o valor de um atributo privado de um objeto.

    Ele é definido usando a palavra-chave get seguida pelo nome do atributo que se deseja acessar.

*/

// Exemplo de um getter

let pessoa = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 30,
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(pessoa.nomeCompleto) // João Silva

/*

    Dessa forma perceba que o atributo nomeCompleto é um atributo privado, e não pode ser acessado diretamente.

    Ele só pode ser acessado atraves do metodo get nomeCompleto.
    
    Caso tente acessar diretamente, vai dar erro.

    console.log(pessoa.nomeCompleto) // João Silva

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
        get imc() {
            return this.peso / (this.altura * this.altura)
        },
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        get maiorIdade() {
            if (this.idade >= 18) {
                return 'Maior de idade'
            }
            else {
                return 'Menor de idade'
            }
        }
    }
}

let pessoa1 = criarPessoa('João', 'Silva', 80, 1.80, 30)
console.log(pessoa1.imc) // 24.69
console.log(pessoa1.nomeCompleto) // João Silva
console.log(pessoa1.maiorIdade) // Maior de idade

/*

    Perceba que ao passar o mouse em cima do atributo, ele não é acessivel diretamente.

    Fica escrito "read-only" que significa somente leitura, ou seja, só pode ser acessado atraves do metodo get.

    Que isso significa tambem que o atributo nao pode ser alterado. Se tentar alterar, vai dar erro.

    pessoa1.imc = 25 // Error
*/