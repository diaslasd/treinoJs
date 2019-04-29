console.log('a =', a)
var a = 2
console.log('a =', a)

//console.log('b = ',b) //gera erro
let b = 2
console.log('b =', b)

function mostraVar() {
    console.log(a)
    //let a = 3 //retorna erro
    //var a = 3 //retorna indefinido
}
mostraVar()