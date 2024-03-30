/*

    Importando o modulo.js

    Para importar um módulo, utilizamos a função require.

    A função require recebe como argumento o caminho do arquivo que desejamos importar.


*/

const modulo = require('./modulo');

console.log(modulo.name); // Modulo

const Person = require('./modulo');

const person = new Person('John', 30);
console.log(person); // Person { name: 'John', age: 30 }