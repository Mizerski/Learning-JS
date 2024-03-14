try {
    // tarefas
} catch (error) {
    // tratando tarefas caso de erro
} finally {
    // sempre sera executado
    // ou seja sempre encerra a tarefa
}



function timeNow(date) {
    if (date && !(date instanceof Date)) {
        throw new TypeError('waiting date')
    }
    if (!date) {
        date = new Date()
    }
    return date.toLocaleTimeString('pt-BR',{
        hour12: false
    })
}

const hour = timeNow()
console.log(hour)