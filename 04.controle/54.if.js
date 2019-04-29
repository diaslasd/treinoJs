const meuNome = 'André'
let minhaIdade = 47

function meusDados(nome = meuNome, idade = minhaIdade) {
    let novaIdade = 50
    console.log(nome, idade)
}

meusDados()

const imprimirResultado = function(nota) {
    if(typeof nota != 'number') return console.log('Erro! Não é número!')
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(7.5)
imprimirResultado(6.2)
imprimirResultado('nota')

Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this < fim
}

const nota = 9
console.log(nota.entre(8, 10))