// Parametros Variaveis - arguments
function soma1() {
    let soma = 0
    for (let i in arguments) {
    soma += arguments[i]
    }
    return soma
}
console.log(soma1(1, 2, 3, 4, 5))

// Parametros padrão - es2015
function soma2(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1,undefined,3))