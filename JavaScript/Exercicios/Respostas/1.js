// Respostas Exercicios modulo 1

// 1.1


function somarPares(pares) {
    return pares.filter(num => num % 2 === 0).reduce((total, num) => total + num, 0);
}

console.log(somarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 1.2

function ehPrimo(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

console.log(ehPrimo(2));

// 1.3

function substituirPorAsteriscos(palavra) {
    return palavra.replace(/[aeiou]/ig, '*');
}

console.log(substituirPorAsteriscos('teste'));

// 1.4

function pessoaMaisVelha(pessoas) {
    return pessoas.reduce((maisVelha, pessoa) => pessoa.idade > maisVelha.idade ? pessoa : maisVelha);
}

console.log(pessoaMaisVelha([
    { nome: 'Lucas', idade: 23 },
    { nome: 'Ana', idade: 30 },
    { nome: 'João', idade: 25 }
]));

// 1.5

function mesmoElemento(array1, array2) {
    return array1.some(num => array2.includes(num));
}

console.log(mesmoElemento([1, 2, 3], [4, 5, 6]));

// 1.6

function fatorial(num) {
    return num === 0 ? 1 : num * fatorial(num - 1);
}

console.log(fatorial(5));

// 1.7


function transposta(matriz) {
    return matriz[0].map((col, i) => matriz.map(row => row[i]));
}

console.log(transposta([
    [1, 2, 3],
    [4, 5, 6]
]));


// 1.8

function palavraMaisLonga(frase) {
    return frase.split(' ').reduce((maior, palavra) => palavra.length > maior.length ? palavra : maior);
}

console.log(palavraMaisLonga('O Javascript é muito legal'));

// 1.9

function verificarPalindromo(palavra) {
    return palavra === palavra.split('').reverse().join('');
}

console.log(verificarPalindromo('arara'));

// 1.10

function numerosPrimos(num) {
    const primos = [];
    for (let i = 2; i <= num; i++)
        if (ehPrimo(i)) primos.push(i);
    return primos;
}

console.log(numerosPrimos(10));