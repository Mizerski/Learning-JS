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


//function somarNumerosPares(arr){
//    return arr.reduce((acc, curr) => curr % 2=== 0 ?  acc + curr : acc, 0);
//}
//
//const numeros = [1, 2, 3, 4, 5, 6];
//console.log(somarNumerosPares(numeros));


//## Questão 2
//Crie uma função que recebe um número como parâmetro e retorna verdadeiro se o número for primo e falso caso contrário.

//function verFalso(numero) {
//    //verifica se o numero é menor que 2
//    if (numero < 2) return false;
//    //raiz quadrada do numero
//    for (let i = 2; i <= Math.sqrt(numero); i++) {
//        //se for divisil por algum numero nao é primo
//
//        if (numero % i === 0) return false;
//    }
//
//    //se nenhum outro numero o divide, então é primo
//    return true;
//}

//function verFalso(numero) {
//    if (numero < 2) return false;
//
//    for (let i = 2; i <= Math.sqrt(numero); i++){
//        if (numero % i === 0) return false;
//    }
//    return true;
//}
//
//
////teste da função
//console.log('É verdadeiro ', verFalso(7));
//console.log('É falso ', verFalso(16))


////## Questão 4
////Implemente uma função que recebe um objeto representando uma pessoa (com atributos como nome, idade, etc.) e verifica se a pessoa é maior de idade (idade >= 18).
//function verificarMaioridade(pessoa) {
//   return pessoa.idade && pessoa.idade >=18;
//}
//const pessoa1 = {
//    nome: "João",
//    idade: 25,
//};
//const pessoa2 = {
//    nome: "Maria",
//    idade: 17
//};
//console.log(verificarMaioridade(pessoa1)); // true
//console.log(verificarMaioridade(pessoa2)); // false
//
//function substituirVogaisPorAsteriscos(str){
//    let novaStr = ""
//
//    for(let i = 0 ; i< str.length; i++)
//        {
//            // Regex
//            if(/[aeiouAEIOU]/.test(str[i])){
//                novaStr += "*"
//            }else{
//                novaStr += str[i]
//            }
//        }
//    return novaStr
//}
//
//const texto = "Hello , World";
//console.log(substituirVogaisPorAsteriscos(texto))


function verificarPalidromo(str)
{

    const strSemEspaco = str.replace(/\s/g, "").toLowerCase();
    const strInvertida = strSemEspaco.split("").reverse().join("")

    //^(?!\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

    return strSemEspaco === strInvertida
}

console.log(verificarPalidromo("arara"))
console.log(verificarPalidromo("roma e amor"))
console.log(verificarPalidromo("javascript"))