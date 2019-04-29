// Funcao em uma variavel
var imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

// Funcao Arrow
var soma = (a, b) => {
    return a + b;
}
console.log(soma(2, 3))

// retorno Implícito
var subtracao = (a, b) => a - b
console.log(subtracao(2, 3))