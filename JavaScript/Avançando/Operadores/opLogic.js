// Operadores lógicos: && (e), || (ou), ! (não)

// Verifica se 5 é igual a 5 E 6 é igual a 6
console.log(5 == 5 && 6 == 6); // true

// Verifica se 5 é igual a 5 E 6 é diferente de 6
console.log(5 == 5 && 6 != 6); // false

// Verifica se 5 é igual a 5 OU 6 é igual a 6
console.log(5 == 5 || 6 == 6); // true

// Verifica se 5 é igual a 5 OU 6 é diferente de 6
console.log(5 == 5 || 6 != 6); // true

// Exemplo do uso de operadores lógicos com || (ou):
// O usuário escolhe a cor do botão, se não escolher,
// a cor padrão será azul

// const userChoise = "red"; // usuário escolheu a cor vermelha
// const buttonColors = userChoise || "blue";
// console.log(buttonColors);

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Cores disponíveis para o botão
const buttonColors = ["blue", 'red', 'yellow', 'green'];

rl.question('Escolha uma cor para o botão: ', (input) => {
    // Remove espaços extras da entrada do usuário
    const userChoise = input.trim();
    if (buttonColors.includes(userChoise)) { // Verifica se a cor escolhida está na lista de cores disponíveis
        console.log(`Você escolheu a cor: ${userChoise}`);
    } else {
        console.log(`Você não escolheu uma cor válida. Cor padrão aplicada: ${buttonColors[0]}`);
    }
    rl.close();
});
