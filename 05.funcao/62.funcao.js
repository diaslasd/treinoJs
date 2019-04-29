// Função em JS é First-Class Object (Citizens)
// Higher-order function

// forma literal
function fun1() { return 'Literal'}

// Uma variavel
const fun2 = function (e) { return e }

// dentro de um array
const array = [function (a, b) { return a + b}, fun1, fun2]

console.log(array[0](2, 3))
console.log(array[1]())
console.log(array[2]('André'))

// atributo de objeto
const obj = {}
obj.falar = function () { return 'Olá'}
console.log(obj.falar())

// Função como parametro
function run(fun) {
    fun()
}
run(function () { console.log('Executando...')})

// Função pode retornar/ conter uma função
function soma(a, b) {
    return function (c) {
        console.log( (a + b) * c)
    }
}

soma(2, 3)(4)
const mutiplicaSoma = soma(2, 3)
mutiplicaSoma(4)