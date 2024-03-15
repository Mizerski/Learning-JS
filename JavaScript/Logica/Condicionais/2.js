// Definindo uma função que verifica o sinal de um número e exibe uma mensagem correspondente
function verificarSinal(numero) {
    // Verifica se o número é maior que zero
    if (numero > 0) {
        // Se for maior que zero, exibe uma mensagem indicando que o número é positivo
        console.log(`O número ${numero} é positivo.`);
    }
    // Verifica se o número é menor que zero
    else if (numero < 0) {
        // Se for menor que zero, exibe uma mensagem indicando que o número é negativo
        console.log(`O número ${numero} é negativo.`);
    }
    // Se não for maior que zero nem menor que zero, significa que é igual a zero
    else {
        // Nesse caso, exibe uma mensagem indicando que o número é zero
        console.log('O número é zero.');
    }
}

// Testando a função com diferentes números
verificarSinal(5);    // Deve exibir: O número 5 é positivo.
verificarSinal(-3);   // Deve exibir: O número -3 é negativo.
verificarSinal(0);    // Deve exibir: O número é zero.
