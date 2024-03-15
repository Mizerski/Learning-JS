const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc;
let anoNascimento;

let anoAtual = 2023;
anoNascimento = anoAtual - idade;
imc = peso / (altura * altura);
console.log(nome , sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg', 'tem', altura, 'de altura e seu IMC é de', imc, nome, 'nasceu em', anoNascimento, '.');

// Execicio 2

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
console.log(varA, varB, varC);

[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);



