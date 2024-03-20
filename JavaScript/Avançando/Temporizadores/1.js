// Função para obter a hora atual formatada para o fuso horário brasileiro
function getFormattedTime() {
    // Cria um novo objeto Date que representa o momento atual
    let date = new Date();

    // Retorna a hora atual formatada para o fuso horário brasileiro
    return date.toLocaleTimeString('pt-BR');
}

// Função para exibir a hora atual no console
function displayTime() {
    // Chama getFormattedTime para obter a hora atual formatada
    // e então exibe essa hora no console
    console.log(getFormattedTime());
}

// Chama a função displayTime a cada 1000 milissegundos (ou seja, a cada segundo)
setInterval(displayTime, 1000);

// Cria um timer que chama uma função anônima a cada 1000 milissegundos
const timer = setInterval(function () {
    // A função anônima obtém a hora atual formatada e a exibe no console
    console.log(`Função anônima => ${getFormattedTime()}`);
}, 1000);

// Cria um timer que será disparado uma vez após 5000 milissegundos (ou seja, após 5 segundos)
setTimeout(function () {
    // Quando esse timer é disparado, ele para o timer criado acima
    clearInterval(timer);
}, 5000);