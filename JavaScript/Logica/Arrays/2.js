/*

    Avançando mais no metodo map.

    O metodo map pode ser usado para transformar um array de objetos em um array de strings.

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

let nomes = pessoas.map(function (pessoa) {
    return pessoa.nome
})

console.log(nomes) // [ 'Maria', 'João', 'José', 'Ana', 'Carlos', 'Marta', 'Pedro', 'Paula' ]

let idades = pessoas.map(function (pessoa) {
    return pessoa.idade
})

console.log(idades) // [ 20, 18, 25, 30, 35, 40, 45, 50 ]


// Outro exemplo

let funcionarios = [
    { nome: 'Maria', salario: 2000 },
    { nome: 'João', salario: 1800 },
    { nome: 'José', salario: 2500 },
    { nome: 'Ana', salario: 3000 },
    { nome: 'Carlos', salario: 3500 },
    { nome: 'Marta', salario: 4000 },
    { nome: 'Pedro', salario: 4500 },
    { nome: 'Paula', salario: 5000 }
]

const mostrarDadosFuncionarios = funcionarios.map(function (funcionario) {
    return { nome: funcionario.nome }
})

console.log(mostrarDadosFuncionarios)


/*

    Mas se eu quiser procurar somente os funcionarios que ganham mais de 3000 reais?

*/


const funcionariosComSalarioMaiorQue3000 = funcionarios.filter(function (funcionario) {
    return funcionario.salario > 3000
})

console.log(funcionariosComSalarioMaiorQue3000) 