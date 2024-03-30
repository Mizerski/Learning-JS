//## Questão 1
//Escreva uma função em JavaScript que receba um array de números e retorne a soma de todos os números pares presentes no array.
// a função é soma da lista de numeros

//function somaNumerosPares(arr) {
//    let soma = 0;
//    for (let i = 0; i < arr.length; i++) {
//        if (arr[i] % 2 === 0) { // Verifica se o número é par
//            soma += arr[i]; // Adiciona o número à soma
//        }
//    }
//    return soma;
//}
//
//// Exemplo de uso:
//const numeros = [1, 2, 3, 4, 5, 6];
//console.log(somaNumerosPares(numeros)); // Deverá imprimir 12, que é a soma de 2, 4 e 6


function somarNumerosPares(arr){
    return arr.reduce((acc, curr) => curr % 2=== 0 ?  acc + curr : acc, 0);
}

const numeros = [1, 2, 3, 4, 5, 6];
console.log(somarNumerosPares(numeros)); // Deverá imprimir 12, que é a soma de 2, 4 e 6