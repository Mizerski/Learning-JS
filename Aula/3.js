//Exercício sobre Listas: Contagem de Elementos Pares
//Escreva uma função chamada contarPares que receba uma lista de números como parâmetro e conte quantos desses números são pares. A função deve retornar o número total de elementos pares na lista.

/*Função contarPares (n){
    let contarPares = [];
    para (let i = 0){
        ContarPares embutir em (p);
    }
    retorna ContarPares;
}
  console.log(ContarPares(5));
*/



// function contarPares(lista) {
//     // Eu inicio o contado com zero
//     let contador = 0
//     // Aqui eu inicio um looping que vai de 0 até o tamanho da lista
//     for (let index = 0; index < lista.length; index++) {
//         //Aqui eu verifico se o número é par
//         if (lista[index] % 2 === 0) {
//             // Se for par, eu aumento o contador
//             contador++
//         }
//     }
//     // No final eu retorno o contador para quem chamou a função
//     return contador
// }
// //Teste da função
// //aqui eu defino uma lista de números
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //Aqui eu chamo a função e passo a lista de números
// let totalPares = contarPares(numeros)
// console.log(`Total de pares: ${totalPares}`)

// function contarPares(lista) {
//     return lista.filter((numero) => numero % 2 === 0).length;
// }

// console.log(contarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 5



// ========================================



//Exercício sobre Objetos: Consulta de Informações de Livro
//Imagine que você está criando um sistema de biblioteca. Escreva um programa que utilize objetos para representar informações de livros. Cada livro deve ter as seguintes propriedades: título, autor, ano de publicação e gênero.
/*

bibliotecaLivros(3)
    const lista = ['livro1','livro2','livro3'];
    const names = ['Título','Autor','Ano de Publicação','Gênero'];
    names.find((names) => {
        if (names === 'names'){
            console.log('Encontrado');
        }
    })
        console.log(bibliotecaLivros(names));

*/

//Exercício sobre Objetos: Consulta de Informações de Livro
//Imagine que você está criando um sistema de biblioteca. Escreva um programa que utilize objetos para representar informações de livros. Cada livro deve ter as seguintes propriedades: título, autor, ano de publicação e gênero.



// function bibliotecaLivros(numLivros) {
//     const listaLivros = []

//     for (let index = 1; index <= numLivros; index++) {
//         const livro = {
//             titulo: `Livro ${index}`,
//             autor: `Autor ${index}`,
//             anoPublicacao: 2021,
//             genero: `Gênero ${index}`
//         }
//         listaLivros.push(livro)
//     }
//     return listaLivros
// }

// const livros = bibliotecaLivros(2)

// const tituloProcurado = 'Livro 1'
// const livroProcurado = livros.find((livro) => livro.titulo === tituloProcurado)
// if (livroProcurado) {
//     console.log(`Livro encontrado: ${livroProcurado.titulo}`)
// } else {
//     console.log("Livro não encontrado")
// }

// console.log(livros)

// ========================================

//Exercício sobre Listas (Fácil): Soma de Elementos
//Escreva uma função chamada somaElementos que receba uma lista de números como parâmetro e retorne a soma de todos os elementos da lista.


// A função é soma de elementos:
// function somaElementos(lista) {
//     //soma é igual a 0
//     let soma = 0;
//     //fiz um loopin na lista para poder nao ter limite de quanto pode calcular
//     for (let i = 0; i < lista.length; i++) {
//         //faço a soma de todos os numeros informados na lista
//         soma += lista[i];
//     }
//     //retorno com o resultado
//     return soma;
// }
// //ação de quanto desejo saber:
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(somaElementos(numeros)); //Saida: 55


// function somaElementos(lista){
//     return lista.reduce((acc, numero) => acc + numero, 0);
// }
// console.log(somaElementos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 55

//Exercício sobre Funções (Fácil): Verificação de Número Par
//Escreva uma função chamada ehPar que receba um número como parâmetro e retorne true se o número for par e false se o número for ímpar.

// let n = 4
// let i = 7
// function ehPar (numero){
//     // Verifica se o número é divisível por 2 sem deixar resto
// // Se não deixar resto, então o número é par
// // Se deixar resto, então o número é ímpar
// if (numero % 2 === 0){
//     return console.log( " numero " + n + " é par")
// }
//     else {
//         return console.log (" numero " + i + " é impar")
//     }
// }
// // Exemplo de uso:
// console.log(ehPar(n))
// console.log(ehPar(i))


// function Ehpar(numero) {
//     if (numero % 2 === 0) {
//         console.log("O número " + numero + " é par");
//         return true;
//     } else {
//         console.log("O número " + numero + " é impar");
//         return false;
//     }
// }

// console.log(Ehpar(4));
// console.log(Ehpar(7));

// ========================================

/*Exercício sobre Condicionais (Médio): Verificação de Triângulo

Escreva uma função chamada tipoTriangulo que receba três números como parâmetros, representando os lados de um triângulo. A função deve retornar:
"Equilátero" se todos os lados forem iguais.
"Isósceles" se pelo menos dois lados forem iguais.
"Escaleno" se todos os lados forem diferentes.
*/
// function tipoTriangulo(lado1, lado2, lado3) {
//     // Verifica se todos os lados são iguais
//     if (lado1 === lado2 && lado2 === lado3) {
//         return "Equilátero";
//     }
//     // Verifica se pelo menos dois lados são iguais
//     else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
//         return "Isósceles";
//     }
//     // Se nenhum dos casos anteriores for verdadeiro, significa que todos os lados são diferentes
//     else {
//         return "Escaleno";
//     }
// }

// // Exemplo dos lados do triangulo
// console.log(tipoTriangulo(5, 5, 5)); // Saída: "Equilátero"
// console.log(tipoTriangulo(4, 4, 5)); // Saída: "Isósceles"
// console.log(tipoTriangulo(3, 4, 5)); // Saída: "Escaleno"

// function tipoTriangulo(lado1, lado2, lado3){
//     if(lado1 === lado2 && lado2 === lado3) return "Equilátero";
//     if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3) return "Isósceles";
//     return "Escaleno";
// }

// console.log(tipoTriangulo(5, 5, 5));
// console.log(tipoTriangulo(4, 4, 5));
// console.log(tipoTriangulo(3, 4, 5));

// ========================================

/*Exercício sobre Objetos (Médio): Gerenciamento de Produtos
Crie um objeto chamado produto com as seguintes propriedades: nome, preco, quantidade. Escreva uma função chamada calcularTotal que receba um objeto de produto como parâmetro e retorne o valor total do produto (preço * quantidade).
*/
// // Definindo o objeto produto
// let produto = {
//     nome: "Exemplo",    // Nome do produto
//     preco: 0,           // Preço do produto
//     quantidade: 0       // Quantidade do produto
// };
// // Função para calcular o total do produto
// function calcularTotal(produto) {
//     // Calcula o total multiplicando o preço pela quantidade
//     let total = produto.preco * produto.quantidade;
//     // Retorna o total calculado
//     return total;
// }
// // Exemplo de uso
// produto.nome = "Camisa";        // Define o nome do produto
// produto.preco = 25.00;          // Define o preço do produto
// produto.quantidade = 2;         // Define a quantidade do produto
// // Chama a função calcularTotal com o objeto produto como parâmetro
// let totalProduto = calcularTotal(produto);
// // Exibe o total calculado
// console.log(" Produto:", produto.nome);
// console.log(" Você comprou:", produto.quantidade);
// console.log(" Valor da unidade é:", produto.preco);
// console.log(" Total do produto:", totalProduto);


// let produto = {
//     nome: "Camisa",
//     preco: 25.00,
//     quantidade: 2
// };

// function calcularTotal(produto) {
//     return produto.preco * produto.quantidade;
// }

// produto.nome = "Camisa";
// produto.preco = 25.00;
// produto.quantidade = 2;

// let totalProduto = calcularTotal(produto);

// console.log("Produto:", produto.nome);
// console.log("Você comprou:", produto.quantidade);
// console.log("Valor da unidade é:", produto.preco);
// console.log("Total do produto:", totalProduto);

// ========================================

/*Exercício sobre Variáveis (Fácil): Conversão de Temperatura
Escreva um programa que converta uma temperatura de Celsius para Fahrenheit. Peça ao usuário para inserir a temperatura em Celsius e exiba a temperatura equivalente em Fahrenheit.
*/
// Solicita ao usuário que insira a temperatura em Celsius
// let temperaturaCelsius = prompt("Insira a temperatura em Celsius:");

// // Converte a temperatura de Celsius para Fahrenheit
// let temperaturaFahrenheit = (parseFloat(temperaturaCelsius) * 9 / 5) + 32;

// // Exibe a temperatura equivalente em Fahrenheit
// console.log("A temperatura em Fahrenheit é:", temperaturaFahrenheit);



// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Insira a temperatura em Celsius: ', (temperaturaCelsius) => {
//     let temperaturaFahrenheit = (parseFloat(temperaturaCelsius) * 9 / 5) + 32;
//     console.log("A temperatura em Fahrenheit é:", temperaturaFahrenheit);
//     readline.close();
// });


// Funcao basica


// function mostrarMensagem() {
//     console.log('Olá, mundo!');
// }

// // Funcao com parametro
// function mostrarNome(nome) {
//     console.log('Olá, ' + nome + '!');
// }


// function somar(a, b) {
//     return a + b;
// }

// console.log(somar(10, 5)); // 5
// 0        1      2         3        4
// let frutas = ['banana', 'maçã', 'uva', 'laranja', 'manga'];
// console.log(frutas[2]); // ['banana', 'maçã', 'uva', 'laranja', 'manga']

// let numeros = [1, 2, 3, 4, 5];


// let pessoas = [
//     {
//         nome: 'João',
//         idade: 25
//     },
//     {
//         nome: 'Maria',
//         idade: 30
//     }
// ]


// const meuObjeto = {
//     nome: 'João',
//     idade: 25,
//     cidade: 'São Paulo'
// }
// console.log(meuObjeto.nome); // João


// const meuObjeto2 = new Object();

// meuObjeto2.nome = 'Maria';
// meuObjeto2.idade = 30;
// meuObjeto2.cidade = 'Rio de Janeiro';

// console.log(meuObjeto2.nome); // Maria
// console.log(meuObjeto2.idade); // 30
// console.log(meuObjeto2.cidade); // Rio de Janeiro

// const meuObjeto3 = new Object({
//     nome: 'José',
//     idade: 35,
//     cidade: 'Belo Horizonte'
// });

// console.log(meuObjeto3.nome); // José
// console.log(meuObjeto3.idade); // 35
// console.log(meuObjeto3.cidade); // Belo Horizonte


// function criarPessoa(nome, idade, cidade) {
//     this.nome = nome;
//     this.idade = idade;
//     this.cidade = cidade;
// }

// const pessoa1 = new criarPessoa('João', 25, 'São Paulo');
// const pessoa2 = new criarPessoa('Maria', 30, 'Rio de Janeiro'); 




// function verificarSinal(numero){
//     if(numero > 0){
//         return "Positivo";
//     } else if(numero < 0){
//         return "Negativo";
//     } else {
//         return "Zero";
//     }
// }



const soma = function(num_1, num_2) {
    return 'A soma é ' + (num_1 + num_2);
}


function calcular(a, b, operacao) {
    return operacao(a, b);
}

console.log(calcular(10, 5, soma));


/*

 Funçao anonima

*/

// const tabuada = function (a, b) {
//     return a + b;
// }


// function somar(a, b) {
//     return a + b;
// }


// const objeto ={
//     nome: "Joao",
//     idade: 25,
//     cidade: "São Paulo",
//     metodo: function(){
//         console.log("Olá, mundo!");
//     }
// }

// console.log(objeto.metodo());



// function semArgumento() {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }
//     console.log(total);
// }

// semArgumento(1, 2, 3, 4, 5); // 15


// function comObjeto(objeto) {
//     console.log(objeto.nome);
//     console.log(objeto.idade);
//     console.log(objeto.cidade);
// }

// comObjeto({ nome: "João", idade: 25, cidade: "São Paulo" });


// function comArray(array) {
//     console.log(array[0]);
//     console.log(array[1]);
//     console.log(array[2]);
// }

// comArray(["João", 25, "São Paulo"]);

function desestruturar({ nome, idade, cidade }) {
    console.log(nome);
    console.log(idade);
    console.log(cidade);
}

desestruturar({ nome: "João", idade: 25, cidade: "São Paulo" });


/*

     Qual a diferença entre objeto estruturado e desestruturado?


     exemplo:

        const pessoa = {
            nome: "João",
            idade: 25,
            cidade: "São Paulo"
        }


        const { nome, idade, cidade } = pessoa;


        No exemplo acima, a variável pessoa é um objeto estruturado, e a variável nome, idade e cidade são variáveis desestruturadas.

        No exemplo acima, a variável pessoa é um objeto estruturado, e a variável nome, idade e cidade são variáveis desestruturadas.
*/