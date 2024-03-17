/*

    Criando objetos no Javascript, forma básica.

    O que é um objeto?

    - Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos).

    - Objetos são uma das principais maneiras que a linguagem JavaScript tem de armazenar e manipular dados. A maioria dos objetos em JavaScript são instâncias do objeto Object, que é um objeto global e pode ser construído através do operador new Object e da inicialização usando um objeto literal. O construtor Object cria um wrapper de objeto para o valor fornecido. Se o valor é null ou undefined, ele criará e retornará um objeto vazio, caso contrário, retornará um objeto de um Tipo que corresponde ao valor fornecido.

    - Objetos podem ser pensados como as coisas tangíveis que usamos no mundo real, como um carro, um cachorro, uma caneta, uma xícara, etc. Como esses objetos do mundo real, em JavaScript, objetos também podem conter uma variedade de informações. Eles também podem interagir uns com os outros. Um objeto pode ser passado para uma função como um argumento. Uma função pode ser usada como uma propriedade de um objeto. E assim por diante.

*/


/* 

    Objeto Literal

    - O objeto literal é uma maneira de criar um objeto em JavaScript. Um objeto literal é uma lista de pares de nome/valor (como idade: 25) dentro de chaves {}.

    - A chave (ou nome) é uma string. Cada chave é seguida por um valor, que pode ser de qualquer tipo.

*/


// Exemplo 1: Criando um objeto literal

const meuObjeto = {
    nome: 'Lucas',
    idade: 25,
    cidade: 'São Paulo'
}

// Acessando as propriedades do objeto

console.log(meuObjeto.nome) // Lucas
console.log(meuObjeto.idade) // 25
console.log(meuObjeto.cidade) // São Paulo


/*

    Criando com o new Object()

    - O construtor Object cria um wrapper de objeto para o valor fornecido. Se o valor é null ou undefined, ele criará e retornará um objeto vazio, caso contrário, retornará um objeto de um Tipo que corresponde ao valor fornecido.

*/

// Exemplo 2: Criando um objeto com o new Object()

const meuObjeto2 = new Object()

meuObjeto2.nome = 'Lucas'
meuObjeto2.idade = 25
meuObjeto2.cidade = 'São Paulo'

console.log(meuObjeto2.nome) // Lucas
console.log(meuObjeto2.idade) // 25
console.log(meuObjeto2.cidade) // São Paulo

// Exemplo 3: Criando um objeto com o new Object()

const meuObjeto3 = new Object({
    nome: 'Lucas',
    idade: 25,
    cidade: 'São Paulo'
})

console.log(meuObjeto3.nome) // Lucas
console.log(meuObjeto3.idade) // 25
console.log(meuObjeto3.cidade) // São Paulo


/*

 Explicando o que foi feito acima

    - O construtor Object cria um wrapper de objeto para o valor fornecido. Se o valor é null ou undefined, ele criará e retornará um objeto vazio, caso contrário, retornará um objeto de um Tipo que corresponde ao valor fornecido.
     ps: O que é um wrapper de objeto? Um wrapper de objeto é um objeto que contém um valor primitivo.
    
*/


/* 

    Criando com funções construtoras

    - Funções construtoras são usadas para criar novos objetos. O operador new é usado para criar uma instância de um objeto.

    - O this palavra-chave se refere ao objeto que está sendo criado.

*/

// Exemplo 4: Criando um objeto com funções construtoras

function Pessoa(nome, idade, cidade) {
    this.nome = nome
    this.idade = idade
    this.cidade = cidade
}

const pessoa = new Pessoa('Lucas', 25, 'São Paulo')

console.log(pessoa.nome) // Lucas
console.log(pessoa.idade) // 25
console.log(pessoa.cidade) // São Paulo





