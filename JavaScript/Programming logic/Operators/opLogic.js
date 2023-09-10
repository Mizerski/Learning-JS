//Operadores logicos: && (and), || (or), ! (not)

console.log(5 == 5 && 6 == 6); //true
console.log(5 == 5 && 6 != 6); //false
console.log(5 == 5 || 6 == 6); //true
console.log(5 == 5 || 6 != 6); //true

//Exemplo do uso de operadores logicos com || (or), usuario escolhe a cor do botao, se nao escolher,
// a cor padrao sera azul

// const userChoise = "red"; //usuario escolheu a cor vermelha
// const buttonColors = userChoise || "blue";
// console.log(buttonColors);


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const buttonColors = ["blue", 'red', 'yellow', 'green'];

rl.question('Escolha uma cor para o botao: ', (input)=>{
    const userChoise = input.trim();
    if(buttonColors.includes(userChoise)){
        console.log(`Voce escolheu a cor: ${userChoise}`);
    }else{
        console.log(`Voce nao escolheu uma cor valida, cor padrao aplicada: ${buttonColors[0]}`);
    }
    rl.close();
})