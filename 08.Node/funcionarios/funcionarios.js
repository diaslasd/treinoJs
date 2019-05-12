const url = 'http://tiop.dtceagl.intraer/funcionarios.json'
// const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then( response => {
    const funcionarios = response.data
    const mulherChina = funcionarios.filter( funcionario => funcionario.pais == 'China' && funcionario.genero == 'M' )
    //console.log(mulherChina)
    const ordemMenorSalario = mulherChina.sort( ( a, b ) => a.salario - b.salario)
    console.log(ordemMenorSalario[0])
})

// Desafio - Mulher chinesa com menor salário

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);