// Objective: how to use arrays in JavaScript

const names = ['Max', 'Manuel',' Anna'];
const ages = [30, 29, 31, 22];

names.push('Julia, John'); // Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
names.pop([1]);// Remove o último elemento de um array e retorna aquele elemento.
names.shift();// Remove o primeiro elemento de um array e retorna aquele elemento.
names.unshift('Julia, John');// Adiciona um ou mais elementos no início de um array e retorna o novo comprimento desse array.
names.indexOf('Anna');// Retorna o primeiro índice em que um elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
names.lastIndexOf('Anna');// Retorna o último índice em que um elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
names.slice(0, 3);// Retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original.
names.splice(0, 2, 'Julia, John');// Altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
names.concat(ages);// Retorna um novo array contendo todos os arrays ou valores passados como parâmetro.
names.join(' - ');// Junta todos os elementos de um array em uma string e retorna esta string.
names.reverse();// Inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.
names.sort();// Ordena os elementos de um array de acordo com a função de comparação passada.
names.fill('Julia, John', 0, 2);// Preenche todos os valores do array a partir do índice inicial a um índice final com um valor estático.
names.includes('Anna');// Determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
names.find((name, index, completeArray) => name === 'Anna');// Retorna o valor do primeiro elemento do array que satisfizer a função de teste provida.
names.findIndex((name, index, completeArray) => name === 'Anna');// Retorna o índice do primeiro elemento do array que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.




