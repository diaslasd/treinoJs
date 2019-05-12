const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

const resultado = alunos.map( a => a.nota)

console.log(resultado)
console.log('Soma de todos os valores: ',resultado.reduce( (acumulado, atual) => acumulado + atual))
console.log('Soma de todos os valores mais 10: ',resultado.reduce( (acumulado, atual) => acumulado + atual, 10 ))
