const url = 'http://tiop.dtceagl.intraer/funcionarios.json'
//const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// Passado pelo Instrutor
const chinenes = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (fOrigem, fAtual) => fOrigem.salario < fAtual.salario ? fOrigem : fAtual

axios.get(url).then( response => {
    const funcionarios = response.data

    // Minha Solução
    const mulherChina = funcionarios.filter( funcionario => funcionario.pais === 'China' && funcionario.genero === 'F' )
    const ordemMenorSalario = mulherChina.sort( ( a, b ) => a.salario - b.salario)
    console.log('Eu ',ordemMenorSalario[0])

    // Solução do Instrutor
    const instrutor = funcionarios
                            .filter(chinenes)
                            .filter(mulheres)
                            .reduce(menorSalario)

    console.log('Instrutor', instrutor)

})

// Desafio - Mulher chinesa com menor salário

// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers);