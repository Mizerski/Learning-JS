try {
    // Bloco de código que contém as tarefas a serem executadas
    // Pode lançar erros durante sua execução
    // Se ocorrer um erro, o controle é transferido para o bloco catch
    // Se não ocorrer erro, o bloco finally é executado
    // Este bloco sempre será executado, independentemente de ter ocorrido um erro ou não
} catch (error) {
    // Bloco de código para tratar os erros que podem ocorrer nas tarefas
    // O parâmetro 'error' contém informações sobre o erro que ocorreu
} finally {
    // Bloco de código que sempre será executado após o bloco try, independentemente de ocorrer um erro ou não
    // É usado para realizar ações que devem ser feitas independentemente do resultado das tarefas
    // Por exemplo, encerrar recursos, liberar memória, etc.
}

// Função para obter a hora atual
function timeNow(date) {
    // Verifica se a entrada 'date' é fornecida e se é do tipo Date
    if (date && !(date instanceof Date)) {
        // Lança um erro do tipo TypeError se 'date' não for do tipo Date
        throw new TypeError('data de espera');
    }

    // Se 'date' não for fornecida, cria um novo objeto Date com a data e hora atuais
    if (!date) {
        date = new Date();
    }

    // Retorna a hora formatada de acordo com o formato desejado (no formato 24 horas)
    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// Chama a função timeNow sem passar nenhum parâmetro, utilizando a data e hora atuais
const hour = timeNow();
console.log(hour); // Exibe a hora atual no console
