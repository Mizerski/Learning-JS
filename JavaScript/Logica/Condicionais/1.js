// Objetivo: Aprender a usar o if e else
// O if e else são usados para fazer comparações e tomar decisões.
// Se a condição for verdadeira, ele executa o bloco de código dentro do if.
// Se for falsa, ele executa o bloco de código dentro do else.

// Importação do módulo readline para interação com o console
const readline = require('readline');

// Criação de uma interface readline para entrada e saída no console
const quest = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Lista de estados brasileiros
const states = [
    'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',
    'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso do Sul', 'Mato Grosso', 'Minas Gerais',
    'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte',
    'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'
];

// Pergunta ao usuário para digitar o nome de um estado brasileiro
quest.question('Digite o nome de um estado brasileiro: ', (input) => {
    // Remove espaços em branco extras da entrada do usuário
    const country = input.trim();

    // Verifica se o estado inserido está na lista de estados brasileiros
    if (states.includes(country)) {
        console.log('Você é brasileiro');
    } else {
        console.log('Você não é brasileiro');
    }

    // Fecha a interface readline após a conclusão
    quest.close();
});
