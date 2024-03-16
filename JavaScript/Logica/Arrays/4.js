/*
    Agora usando o metodo filter, map e reduce juntos.

    Suponha que você tem um array de objetos que representam produtos de um e-commerce.

    Você quer criar um objeto que represente um relatorio com a quantidade de produtos, o valor total dos produtos e o produto mais caro.

    Mas você quer que esse relatorio seja feito somente com os produtos que custam mais de 1000 reais.

*/

let produtos = [
    { nome: 'Smartphone', preco: 2000, quantidade: 2 },
    { nome: 'Notebook', preco: 3000, quantidade: 3 },
    { nome: 'Tablet', preco: 1500, quantidade: 4 },
    { nome: 'Smartwatch', preco: 500, quantidade: 5 },
    { nome: 'SmartTV', preco: 4000, quantidade: 1 },
    { nome: 'Câmera', preco: 300, quantidade: 6 }
]

let relatorio = produtos.filter(function (produto) {
    // Filtra somente os produtos que custam mais de 1000 reais
    return produto.preco > 1000
})
    // Com o map, transformamos o array de objetos em um array de objetos com somente os atributos que queremos.
    .map(function (produto) {
        return { nome: produto.nome, preco: produto.preco, quantidade: produto.quantidade }
    })
    // Com o reduce, criamos o relatorio.
    .reduce(function (relatorio, produto) {
        // Calcula a quantidade total de produtos
        relatorio.quantidadeTotal += produto.quantidade
        // Calcula o valor total dos produtos
        relatorio.valorTotal += produto.preco * produto.quantidade

        // Encontra o produto mais caro
        if (produto.preco > relatorio.produtoMaisCaro.preco) {
            // Se o produto atual for mais caro que o produto mais caro atual, o produto mais caro atual é substituido pelo produto atual.
            relatorio.produtoMaisCaro = produto
        }

        return relatorio
    }, {
        // Valor inicial do relatorio
        quantidadeTotal: 0, valorTotal: 0, produtoMaisCaro: { preco: 0 }
    })

console.log(relatorio) 