/*

    Avançando mais no metodo reduce.

    O metodo reduce pode ser usado para transformar um array de objetos em um unico objeto.

*/


let pessoas = [
    { nome: 'Maria', idade: 20 },
    { nome: 'João', idade: 18 },
    { nome: 'José', idade: 25 },
    { nome: 'Ana', idade: 30 },
    { nome: 'Carlos', idade: 35 },
    { nome: 'Marta', idade: 40 },
    { nome: 'Pedro', idade: 45 },
    { nome: 'Paula', idade: 50 }
]

let pessoaMaisVelha = pessoas.reduce(function (pessoaMaisVelha, pessoa) {
    if (pessoa.idade > pessoaMaisVelha.idade) {
        return pessoa
    } else {
        return pessoaMaisVelha
    }
})

console.log(pessoaMaisVelha) // { nome: 'Paula', idade: 50 }


/*

    Exemplo de uso no mundo real.

    Suponha que você tem um array de objetos que representam produtos de um e-commerce.

    Você quer criar um objeto que represente um relatorio com a quantidade de produtos, o valor total dos produtos e o produto mais caro.


*/


let produtos = [
    { nome: 'Smartphone', preco: 2000, quantidade: 2 },
    { nome: 'Notebook', preco: 3000, quantidade: 3 },
    { nome: 'Tablet', preco: 1500, quantidade: 4 },
    { nome: 'Smartwatch', preco: 500, quantidade: 5 },
    { nome: 'SmartTV', preco: 4000, quantidade: 1 },
    { nome: 'Câmera', preco: 300, quantidade: 6 }
]

let relatorio = produtos.reduce(function (relatorio, produto) {
    relatorio.quantidadeTotal += produto.quantidade
    relatorio.valorTotal += produto.preco * produto.quantidade

    if (produto.preco > relatorio.produtoMaisCaro.preco) {
        relatorio.produtoMaisCaro = produto
    }

    return relatorio
}, { quantidadeTotal: 0, valorTotal: 0, produtoMaisCaro: { preco: 0 } })

console.log(relatorio) // { quantidadeTotal: 21, valorTotal: 19500, produtoMaisCaro: { nome: 'SmartTV', preco: 4000, quantidade: 1 } }


/*

    Explicando o codigo acima.

    O metodo reduce recebe dois parametros, o primeiro é uma função que recebe dois parametros, o acumulador e o elemento atual do array.

    O segundo parametro do metodo reduce é o valor inicial do acumulador.

    No exemplo acima, o valor inicial do acumulador é um objeto que representa o relatorio.

    A função que é passada como primeiro parametro do metodo reduce recebe dois parametros, o acumulador e o elemento atual do array.

    A função retorna o acumulador atualizado.

    No final, o metodo reduce retorna o acumulador.

*/
