/* Closure é o escopo criado quando uma
função é declarada
Esse escopo permite a função acessa e manipular
variável externas a função
*/

// Contexto léxico

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
