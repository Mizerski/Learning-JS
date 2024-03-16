/*
    Funcao recursiva no Javascript

    Uma função recursiva é uma função que chama a si mesma.

*/

function recursiva(max) {
    if (max >= 10) return
    max++
    console.log(max)
    recursiva(max)
}

recursiva(0)

/*

    A função recursiva é uma função que chama a si mesma, e para que ela não fique em loop infinito, é necessário que ela tenha uma condição de parada.

    No exemplo acima, a condição de parada é que o max seja maior ou igual a 10.

    Mas quando exatamente usar uma função recursiva?

    A função recursiva é mais utilizada quando queremos percorrer uma estrutura de dados, como por exemplo, uma árvore.

*/

