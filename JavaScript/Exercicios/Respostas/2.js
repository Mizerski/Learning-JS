let numeros = [1, 2, 3, 4, 5]

let somarLista = numeros.reduce(function (acc, num) {
    return acc + num
})


console.log(somarLista)


function somaLista(pares) {
    return pares.filter(num => num % 2 === 0).reduce((total, num) => total + num, 0);
}

console.log(somaLista([1, 1, 1, 1, 1, 1, 10])) 