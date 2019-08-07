const schedule = require('node-schedule')

// padrao 
// segundo minuto hora diaMes mês diaSemana(dom = 0)
// */ -> repetição
// '*/5 * 19 * * 5' tradução da direita para esquerda
// Sexta, todos os dias, todos os mês, às 19, 
// todos os minutos, repetido a cada 5 segundo

const tarefa1 = schedule.scheduleJob('*/5 * 20 * * 5', function() {
    console.log( 'Executando tarefa 1:', new Date().getSeconds() )
})

setTimeout( function() {
    tarefa1.cancel()
    console.log( 'Cancelando tarefa 1')
},20000) // cancela a tarefa 1 depois de 20 segundos

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [ new schedule.Range(1, 5)]
regra.hour = 20
regra.second = 30

const tarefa2 = schedule.scheduleJob( regra, function() {
    console.log( 'Executando tarefa 2:', new Date().getSeconds() )
})