const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function somarNumbers(num1, num2) {
    return num1 + num2;
}

function divNumbers(num1, num2) {
    return num1 / num2;
}

function multiNumbers(num1, num2) {
    return num1 * num2;
}

readline.question('Insira o primeiro valor: ', (num_1) => {
    readline.question('Insira o segundo valor: ', (num_2) => {
        readline.question('Qual operação você deseja fazer? 1 - somar, 2 - dividir, 3 - multi ', (operation) => {
            num_1 = parseInt(num_1);
            num_2 = parseInt(num_2);
            operation = parseInt(operation);
            let resultado;

            switch (operation) {
                case 1:
                    resultado = somarNumbers(num_1, num_2);
                    break;
                case 2:
                    resultado = divNumbers(num_1, num_2);
                    break;
                case 3:
                    resultado = multiNumbers(num_1, num_2);
                    break;
                default:
                    console.log('Opção inválida.');
                    readline.close();
                    return;
            }
            if (isNaN(resultado)) {
                console.log("Possivel erro de tipo")
            } else {
                console.log('O resultado é: ', resultado);
            }
            readline.close();

        });
    });
});
