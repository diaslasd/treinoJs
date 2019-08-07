// Variareis
var a = 1
let b = 2, d = 7
const c = 3, e = 8
{
    var a = 4
    let b = 5
    const c = 6
    console.log (a, b, c, d, e)    
}
console.log (a, b, c)

// Templete String
const produto = 'iPad'
console.log(`${produto} é caro!
Eu não posso comprar.`)

// Destructuring
const [ f, g, ...fim] = "André"
console.log( f, g, fim)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 19}
console.log(i, nome)