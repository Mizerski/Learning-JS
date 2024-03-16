/*
  No Javascript, quando queremos fazer uma ação repetidamente, podemos usar loops.

    O loop for é uma estrutura de controle que permite a execução de um bloco de código repetidamente, enquanto uma condição for verdadeira.

    O loop for é composto por 3 partes:
        - Inicialização: onde declaramos e inicializamos a variável de controle
        - Condição: onde definimos a condição para que o loop continue
        - Incremento: onde incrementamos a variável de controle
*/

// Exemplo:

for (let nomeDoLoop = 0; nomeDoLoop < 5; nomeDoLoop++) {
    console.log(nomeDoLoop)
}

// O exemplo acima imprime os números de 0 a 4 no console.

// Exemplo de loop for com array

let frutas = ['banana', 'maçã', 'melancia']

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

// O exemplo acima imprime as frutas do array no console.


/*
  No Javascript, temos tambem o loop while, que é uma estrutura de controle que permite a execução de um bloco de código repetidamente, enquanto uma condição for verdadeira.

    O loop while é composto por 2 partes:
        - Condição: onde definimos a condição para que o loop continue
        - Incremento: onde incrementamos a variável de controle
*/

// Exemplo:

let contador = 0
// While = enquanto, ou seja, enquanto a condição for verdadeira, o loop continua

while (contador < 5) {
    console.log(contador)
    contador++
}


/*

    No Javascript, temos tambem o loop do...while, que é uma estrutura de controle que permite a execução de um bloco de código repetidamente, enquanto uma condição for verdadeira.
    
        O loop do...while é composto por 2 partes:
            - Condição: onde definimos a condição para que o loop continue
            - Incremento: onde incrementamos a variável de controle
    */

// Exemplo:

let contadorDoWhile = 0

// Do = faça, ou seja, faça o bloco de código, e depois verifique a condição
do {
    console.log(contadorDoWhile)
    contadorDoWhile++
}
while (contadorDoWhile < 5)


/*

    No Javascript, temos tambem o loop for...of, que é uma estrutura de controle que permite a execução de um bloco de código repetidamente, enquanto uma condição for verdadeira.
    
        O loop for...of é usado para iterar sobre elementos iteráveis, como arrays e strings.
*/

// Exemplo:

let frutasForOf = ['banana', 'maçã', 'melancia']

for (let fruta of frutasForOf) {
    console.log(fruta)
}

// O exemplo acima imprime as frutas do array no console.



/*

   No Javascript, temos tambem o loop for...in, que é uma estrutura de controle que permite a execução de um bloco de código repetidamente, enquanto uma condição for verdadeira.

    O loop for...in é usado para iterar sobre as propriedades de um objeto.
    
*/


// Exemplo:

let carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2020
}

for (let propriedade in carro) {
    console.log(propriedade + ': ' + carro[propriedade])
}

// O exemplo acima imprime as propriedades do objeto no console.


/*
    No Javascript, temos tambem o loop break, que é uma estrutura de controle que permite a interrupção de um loop.
*/

// Exemplo:

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break // interrompe o loop
    }
    console.log(i)
}


/*
    No Javascript tambem temos o loop for...each, que é uma estrutura de controle que permite a execução de um bloco de código repetidamente, enquanto uma condição for verdadeira.

    O loop for...each é usado para iterar sobre elementos iteráveis, como arrays e strings.
*/


// Exemplo:

let frutasForEach = ['banana', 'maçã', 'melancia']

frutasForEach.forEach(function (fruta) {
    console.log(fruta)
})

// O exemplo acima imprime as frutas do array no console.

/*
   Nota final:

   Afinal qual a diferença entre o loop for...of e o loop for...each?

    A diferença é que o loop for...of é usado para iterar sobre elementos iteráveis, como arrays e strings, enquanto o loop for...each é usado para iterar sobre elementos iteráveis, como arrays e strings, e é uma forma mais curta de escrever um loop for.

    O loop for...each é uma forma mais curta de escrever um loop for, e é usado para iterar sobre elementos iteráveis, como arrays e strings.

    O loop for...of é usado para iterar sobre elementos iteráveis, como arrays e strings.
    
    Resumindo, use o loop for...of para iterar sobre elementos iteráveis, como arrays e strings, e use o loop for...each para iterar sobre elementos iteráveis, como arrays e strings, e é uma forma mais curta de escrever um loop for.
*/
