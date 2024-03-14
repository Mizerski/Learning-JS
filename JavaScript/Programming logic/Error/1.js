// Tente e caso nao ocorra, aconteça o erro

try {
    console.log(object);
} catch (error) {
    console.log('erro aconteceu!!');
}


function add(num1, num2) {
    if (typeof (num1) || typeof (num2) === "number") {
        return num1 + num2

    }
    return "erro de tipo"


}

console.log(add(20, 5));

// throw, colocando validaçao no codigo caso algo de errado

/**
 * Returns the provided name if it is a string.
 * @param {string} name - The name to be checked.
 * @returns {string} - The provided name if it is a string.
 * @throws {string} - Throws an error if the provided name is not a string.
 */

function sayMyName(name) {
    if (typeof (name) === "string") {
        return name
    }
    throw ('erro, nome deve ser uma string (texto)')
}


try {
    console.log(sayMyName("wesley"));
    console.log(sayMyName(10));
} catch (error) {
    console.log(error)
}

