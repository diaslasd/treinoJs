const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () =>{
                try {
                    resolve(JSON.parse(resultado))
                } catch (error) {
                    reject(error)
                }                
            })
        })
    })    
}

// Recusro inserido no ES8
// Objetivo é simprificar o Promisse

let obterAluno = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
} // retorna um objeto AsyncFunction

obterAluno()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))

const turma = async (letra) => await getTurma(letra)
turma('A').then(turmas => turmas.map(alunos => console.log('A', alunos.nome)))
turma('B').then(turmas => turmas.map(alunos => console.log('B', alunos.nome)))
turma('C').then(turmas => turmas.map(alunos => console.log('C', alunos.nome)))