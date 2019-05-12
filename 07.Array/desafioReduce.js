const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são boslsita?
const bolsista = alunos.map(a => a.bolsista); console.log(bolsista)

const todos = ( bolsista, atual ) => ( bolsista && atual)
console.log('Todos são bolsista? ',bolsista.reduce(todos))

// Desafio 2: Algum aluno é bolsista?
const algum = ( bolsista, atual ) => ( bolsista || atual)
console.log('Algum é bolsista? ', bolsista.reduce(algum))