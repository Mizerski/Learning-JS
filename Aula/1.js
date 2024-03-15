// // //  tipo primitivos

// // // let name = 'Peter Parker'; // string
// // // let number = 123; // number
// // // let isTrue = true; // boolean
// // // let isFalse = false; // boolean
// // // let nulo = null; // null
// // // let indefinido = undefined; // undefined
// // // let float = 1.5; // float


// // // declarar funcoes

// // // function somar(numero1, numero2) {
// // //     return numero1 + numero2;
// // // }

// // // let resultado = somar(5, 10);

// // // function helloWorld() {
// // //     console.log('Hello World');
// // // }

// // // helloWorld();


// // // console.log(resultado);


// // function squareRoot(num){
// //     return num ** 0.5;
// // }

// // console.log(squareRoot(120))



// // // Operadores aritmeticos

// // let num1 = 10;
// // let num2 = 5;

// // const add = num1 + num2;
// // const sub = num1 - num2;
// // const mult = num1 * num2;
// // const div = num1 / num2;
// // const mod = num1 % num2;
// // const exp = num1 ** num2;


// // console.log(`Adiçao: ${add}, Subtração: ${sub}, Multiplicação: ${mult}, Divisão: ${div}, Resto da Divisão: ${mod}, Potenciação: ${exp}.`);


// // let contador = 1;
// // contador++; // contador = contador + 1
// // console.log(contador);

// // let contadorDescremento = 2;
// // contadorDescremento--; // contador = contador - 1
// // console.log(contadorDescremento);

// // let contador2 = 1;
// // let passos = 2;
// // contador2 += passos; // contador = contador + passos
// // console.log(contador2);


// // Operador de comparaçao

// // const comp = 10 > 15;
// // const comp2 = 10 < 15;
// // const comp3 = 10 >= 15;
// // const comp4 = 10 <= 15;
// // const comp5 = 10 == 15;
// // const comp6 = 10 != 15;
// // const comp7 = 10 === 15;
// // console.log(comp);

// // && (and) || (or), ! (not)
// // console.log(5 == 5 && 6 == 6) // true
// // console.log(5 == 5 && 6 != 6) // false
// // console.log(5 == 5 || 6 == 6) // true
// // console.log(5 == 5 || 6 != 6); // true, porque uma das condiçoes é verdadeira


// //Criando um objeto



// // const pessoa ={
// //     name: 'Peter Parker',
// //     age: 25,
// //     isSuperHero: true,
// //     address : "New York, NY"
// // }


// // console.log(pessoa.address);


// // juntado criar pessoa numa funcao

// // function criarPessoas(name, age, isSuperHero, address) {
// //     return {
// //         name: name,
// //         age: age,
// //         isSuperHero: isSuperHero,
// //         address: address
// //     }
// // }

// // const pessoa1 = criarPessoas('Peter Parker', 25, true, 'New York, NY');

// // console.log(pessoa1);



// // no typescript


// /*
//    function criarPessoas(name: string, age: number, isSuperHero: boolean, address: string) {
//     return {
//         name: name,
//         age: age,
//         isSuperHero: isSuperHero,
//         address: address
//     }
//    }

//    const pessoa1 = criarPessoas(12345, 25, true, 'New York, NY'); // erro, pois o primeiro parametro deveria ser uma string
// */


// // Criando um array [lista]
// //            //  0  1  2  3  4  5  6  7  8  9
// // const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const names = ['Peter Parker', 'Clark Kent', 'Bruce Wayne', 'Tony Stark'];

// // // Adicionando um elemento no final do array
// // names.push('Barry Allen');
// // console.log(names);

// // // Removendo o ultimo elemento do array
// // names.pop([1]);
// // console.log(names);

// // // //Buscando um elemento especifico
// // // names.find((name) => {
// // //     if (name === 'Peter Parker') {
// // //         console.log('Encontrado');
// // //     }
// // // });



// // Condicionais


// // const num = 10;
// // const num2 = 15;

// // if (num > num2) {
// //     console.log('num1 é maior que num2');
// // } else {
// //     console.log('num1 é menor que num2');
// // }


// function verificarSinal(numero) {
//     if (numero > 0) {
//         console.log(`O numero ${numero} é positivo`);
//     }
//     else if (numero < 0) {
//         console.log(`O numero ${numero} é negativo`);
//     }
//     else {
//         console.log(`O numero ${numero} é zero`);
//     }
// }

// verificarSinal(0); // zero
// verificarSinal(10); // positivo
// verificarSinal(-10); // negativo