function num(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "buzzfizz"
    }
    if (number % 3 === 0) {
        return "buzz"
    }
    if (number % 5 === 0) {
        return "fizz"
    }
    if (number % 3 !== 0 && number % 5 !== 0) {
        return number
    }
}


for (let index = 1; index <= 100; index++) {
    console.log(num(index))
}