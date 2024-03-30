/*
    Avançando nos módulos, agora vamos criar um módulo que recebe dois parâmetros e retorna a soma deles.

    Ou seja podemos ja criar um modulo que recebe uma função e retorna o resultado dela e ja esta pronto para ser importado em outro arquivo.
*/

module.exports = function (x, y) {
    return x + y;
}