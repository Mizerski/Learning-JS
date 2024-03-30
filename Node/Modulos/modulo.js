/*

    Començando com Node.js

    Módulos

    Módulos são arquivos que contém funções, classes, objetos, etc. que podem ser importados em outros arquivos.

    Para exportar um módulo, utilizamos a propriedade module.exports.

*/


const name = 'Modulo';

const sayHello = () => {
    console.log('Hello');
}

module.exports = {
    name,
    sayHello
}
// Acima estamos exportando um objeto com duas propriedades: name e sayHello.


/*

    Exportando classes

    Podemos exportar classes da mesma forma que exportamos objetos.
*/
class createPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

module.exports = createPerson;