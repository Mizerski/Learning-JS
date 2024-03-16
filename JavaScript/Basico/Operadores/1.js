/*
    Operadores Aritméticos em JavaScript

    Em JavaScript, existem vários operadores aritméticos, mas os principais são:

    - Adição (+) -> usado para adicionar dois valores
    - Subtração (-) -> usado para subtrair dois valores
    - Multiplicação (*) -> usado para multiplicar dois valores
    - Divisão (/) -> usado para dividir dois valores
    - Resto da Divisão (%) -> usado para obter o resto da divisão de dois valores
    - Potenciação (**) -> usado para elevar um valor a uma potência

    Exemplos de operadores aritméticos:

    let num1 = 5
    let num2 = 10
    let add = num1 + num2
    
*/


const num1 = 5;
const num2 = 10;
const add = num1 + num2;
const sub = num1 - num2;
const mult = num1 * num2;
const div = num1 / num2;
const mod = num1 % num2;
const exp = num1 ** num2;

console.log(`Adiçao: ${add}, Subtração: ${sub}, Multiplicação: ${mult}, Divisão: ${div}, Resto da Divisão: ${mod}, Potenciação: ${exp}.`);

let contador = 1;
contador++; // contador = contador + 1;
console.log(contador);


let contadorDescremento = 10;
contadorDescremento--; // contadorDescremento = contadorDescremento - 1;
console.log(contadorDescremento);

let contador2 = 1;
let passos = 2;
contador2 += passos; // contador2 = contador2 + passos;
console.log(contador2);


