/*

    Metodos uteis para objetos

    Object.keys(obj) // Retorna um array com as chaves de todas as propriedades do objeto

    Object.values(obj) // Retorna um array com os valores de todas as propriedades do objeto

    Object.entries(obj) // Retorna um array com arrays contendo as chaves e valores de todas as propriedades do objeto

    Object.getOwnPropertyDescriptor(obj, 'prop') // Retorna um objeto com as propriedades de uma propriedade do objeto

    Object.assign(destino, origem1, origem2) // Copia as propriedades de um ou mais objetos para um objeto destino

    Object.freeze(obj) // Congela o objeto, impedindo que suas propriedades sejam modificadas

    Object.seal(obj) // Sela o objeto, impedindo que suas propriedades sejam adicionadas ou removidas

    Object.preventExtensions(obj) // Impede que novas propriedades sejam adicionadas ao objeto

    Object.defineProperties(obj, {
        prop1: {
            get: function() {},
            set: function() {}
        },
        prop2: {
            value: 'valor'
        }
    }) // Define várias propriedades para um objeto

    Object.defineProperty(obj, 'prop', {
        get: function() {},
        set: function() {}
    }) // Define uma propriedade para um objeto


*/


// Exemplo de uso do Object.keys(obj)

let pessoa = {
    nome: 'Lucas',
    idade: 25,
    cidade: 'São Paulo'
}

console.log(Object.keys(pessoa)) // ['nome', 'idade', 'cidade']

// Exemplo de uso do Object.values(obj)

console.log(Object.values(pessoa)) // ['Lucas', 25, 'São Paulo']

// Exemplo de uso do Object.entries(obj)

console.log(Object.entries(pessoa)) // [['nome', 'Lucas'], ['idade', 25], ['cidade', 'São Paulo']]

// Exemplo de uso do Object.getOwnPropertyDescriptor(obj, 'prop')

console.log(Object.getOwnPropertyDescriptor(pessoa, 'nome')) // {value: 'Lucas', writable: true, enumerable: true, configurable: true}

// Exemplo de uso do Object.assign(destino, origem1, origem2)

let dest = { a: 1 }
let o1 = { b: 2 }
let o2 = { c: 3 }

Object.assign(dest, o1, o2)

console.log(dest) // {a: 1, b: 2, c: 3}

// Exemplo de uso do Object.freeze(obj)

let obj = { a: 1, b: 2 }

Object.freeze(obj)

obj.a = 3
obj.b = 4

console.log(obj) // {a: 1, b: 2}

// Exemplo de uso do Object.seal(obj)

let obj_ = { a: 1, b: 2 }

Object.seal(obj_)

obj_.a = 3
obj_.b = 4

console.log(obj_) // {a: 3, b: 4}

// Exemplo de uso do Object.preventExtensions(obj)

let obj__ = { a: 1, b: 2 }

Object.preventExtensions(obj__)

obj__.c = 3

console.log(obj__) // {a: 1, b: 2}

// Exemplo de uso do Object.defineProperties(obj, {prop1: {get: function() {}, set: function() {}}, prop2: {value: 'valor'}})

let obj___ = {}

Object.defineProperties(obj___, {
    prop1: {
        get: function () {
            return this._prop1
        },
        set: function (value) {
            this._prop1 = value
        }
    },
    prop2: {
        value: 'valor'
    }
})

obj___.prop1 = 10

console.log(obj___.prop1) // 10

console.log(obj___.prop2) // valor

// Exemplo de uso do Object.defineProperty(obj, 'prop', {get: function() {}, set: function() {}})

let obj____ = {}

Object.defineProperty(obj____, 'prop', {
    get: function () {
        return this._prop
    },
    set: function (value) {
        this._prop = value
    }
})

obj____.prop = 10

console.log(obj____.prop) // 10

// Exemplo de uso do Object.getOwnPropertyDescriptors(obj)

let obj_____ = { a: 1, b: 2 }

console.log(Object.getOwnPropertyDescriptors(obj_____)) // {a: {value: 1, writable: true, enumerable: true, configurable: true}, b: {value: 2, writable: true, enumerable: true, configurable: true}}




