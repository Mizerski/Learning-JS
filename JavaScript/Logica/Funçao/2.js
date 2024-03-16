/*
 Funçao sem argumentos no javascript

 no exemplo abaixo, a funçao semArgumento() nao tem argumentos, mas mesmo assim, ela consegue acessar os argumentos passados para ela, atraves da variavel arguments, que é uma variavel implicita que toda funçao tem, e que contem todos os argumentos passados para a funçao
*/

function semArgumento() {
    let total = 0
    for (let argumento of arguments) // arguments é uma variavel implicita que toda funçao tem, e que contem todos os argumentos passados para a funçao
    {
        total += argumento
    }
    console.log(total)
}

semArgumento(1, 2, 3, 4, 5) // 15

/*

 Funçao com objeto como argumento

 no exemplo abaixo, a funçao comObjeto() recebe um objeto como argumento, e acessa as propriedades do objeto atraves do operador ponto
*/

function comObjeto(objeto) {
    console.log(objeto.nome)
    console.log(objeto.idade)
}

comObjeto({ nome: "Wesley", idade: 25 })

/*
    
 Funçao com array como argumento
    
 no exemplo abaixo, a funçao comArray() recebe um array como argumento, e acessa os elementos do array atraves do indice
*/

function comArray(array) {
    console.log(array[0])
    console.log(array[1])
}

comArray(["Wesley", 25])

/*
    
     Funçao com objeto desestruturado como argumento
    
     no exemplo abaixo, a funçao funcao() recebe um objeto desestruturado como argumento, e acessa as propriedades do objeto atraves do operador ponto
    
*/

function funcao({ nome, idade }) {
    console.log(nome)
    console.log(idade)
}

funcao({ nome: "Wesley", idade: 25 })


/*
    
     Funçao com array desestruturado como argumento
    
     no exemplo abaixo, a funçao funcao() recebe um array desestruturado como argumento, e acessa os elementos do array atraves do indice
*/

// Nesse caso os 3 pontos antes do parametro, significa que o parametro é um array

const conta = (...argumento) => {
    let total = 0
    for (let argumentos of argumento) {
        total += argumentos
    }
    console.log(total)
}