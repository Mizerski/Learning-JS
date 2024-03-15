function contarPares(lista) {

    // Eu inicio o contado com zero
    let contador = 0

    // Aqui eu inicio um looping que vai de 0 até o tamanho da lista
    for (let index = 0; index < lista.length; index++) {
        //Aqui eu verifico se o número é par
        if (lista[index] % 2 === 0) {
            // Se for par, eu aumento o contador
            contador++
        }
    }

    // No final eu retorno o contador para quem chamou a função
    return contador
}

//Teste da função

//aqui eu defino uma lista de números
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Aqui eu chamo a função e passo a lista de números
let totalPares = contarPares(numeros)

console.log(`Total de pares: ${totalPares}`)

/* 
    Exercício sobre Objetos: Consulta de Informações de Livro

    Imagine que você está criando um sistema de biblioteca. Escreva um programa que utilize objetos para representar informações de livros. Cada livro deve ter as seguintes propriedades: título, autor, ano de publicação e gênero.
*/


let livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia"
}


function exibirInformacoesLivro(livro) {
    console.log(`Título: ${livro.titulo}`)
    console.log(`Autor: ${livro.autor}`)
    console.log(`Ano de Publicação: ${livro.anoPublicacao}`)
    console.log(`Gênero: ${livro.genero}`)
}

console.log("========= Informações do Livro =========")
exibirInformacoesLivro(livro)

/* 
bibliotecaLivros(3)
const lista = ['livro1', 'livro2', 'livro3'];
const names = ['Título', 'Autor', 'Ano de Publicação', 'Gênero'];
names.find((names) => {
    if (names === 'names') {
        console.log('Encontrado');
    }
})
console.log(bibliotecaLivros(names));
*/


function bibliotecaLivros(numLivros) {
    const listaLivros = []

    for (let index = 1; index <= numLivros; index++) {
        const livro = {
            titulo: `Livro ${index}`,
            autor: `Autor ${index}`,
            anoPublicacao: 2021,
            genero: `Gênero ${index}`
        }
        listaLivros.push(livro)
    }
    return listaLivros
}

const livros = bibliotecaLivros(3)

const names = ['Título', 'Autor', 'Ano de Publicação', 'Gênero'];

const found = names.find(name => name === 'Título')

if (found) {
    console.log('Livro Encontrado')
} else {
    console.log('Livro não encontrado')
}

console.log(livros)