//Tipos de Funções

// declarativa - declaration
// é carregado no início
// pode ser chamada antes
console.log(soma(3, 4))
function soma(x, y) {
    return x + y
}

// expressa - expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(4, 3))

// expressa nomeada - named expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(2, 3))