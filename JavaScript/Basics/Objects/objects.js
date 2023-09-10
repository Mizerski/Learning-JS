// Aqui, estamos criando dois objetos usando literais de objeto.
// Nessa sintaxe, usamos chaves {} para criar objetos e separamos as propriedades por vírgulas.
// Cada objeto representa uma pessoa com propriedades como nome, idade, peso e isAdmin.
// Essa é uma maneira mais simples de criar objetos. Porem, não é a mais recomendada para criar muitos objetos.
const personn1 = {
    name: 'John',
    age: 25,
    weight: 80.5,
    isAdmin: true,
};

const personn2 = {
    name: 'Mary',
    age: 25,
    weight: 80.5,
    isAdmin: false,
};
console.log(personn1, personn2);

// Aqui, estamos criando dois objetos usando a função construtora Object() Que nesse caso, é a mais recomendada para
// criar muitos objetos.
function Person(name, age, weight, isAdmin){
    return{
        name: name,
        age: age,
        weight: weight,
        isAdmin: isAdmin,
    }
}
const person1 = Person('John', 25, 80.5, true);
const person2 = Person('Mary', 25, 80.5, false);
console.log(person1, person2);


// Aqui, estamos criando dois objetos usando a função construtora Object() Que nesse caso, é a mais recomendada para
// criar muitos objetos. Porem, estamos usando a sintaxe de atribuição de propriedades de objeto.
//Em vez de escrever name: name, podemos simplesmente escrever name. Pois o nome da propriedade e o nome da variável são iguais.
//E o JavaScript entende que estamos atribuindo o valor da variável name para a propriedade name.
function OtherPerson(name, age, weight, isAdmin){
    return{
        name,
        age,
        weight,
        isAdmin,
    }
}
const otherPerson1 = OtherPerson('John', 25, 80.5, true);
const otherPerson2 = OtherPerson('Mary', 25, 80.5, false);
console.log(otherPerson1, otherPerson2);

//E por fim temos essa maneira de criar a Function, usando a tipagem de dados.
//Estamos dizendo que a variável name é do tipo string, age é do tipo number, weight é do tipo number e isAdmin é do tipo boolean.
//Pois isso evita que o programador atribua um valor de tipo diferente para a propriedade.
//Por exemplo, se tentarmos atribuir um valor do tipo string para a propriedade age, o TypeScript irá nos avisar que isso não é permitido.
function AnotherPerson(name : string, age : number, weight : number, isAdmin : boolean){
    return{
        name,
        age,
        weight,
        isAdmin,
    }
}
const anotherPerson1 = AnotherPerson('John', 25, 80.5, true);
const anotherPerson2 = AnotherPerson('Mary', 25, 80.5, false);
const anotherPersonWithError = AnotherPerson(5, 'José', 80.5, false); // Aqui, estamos tentando atribuir um valor do tipo string para a propriedade age.
console.log(anotherPerson1, anotherPerson2);
