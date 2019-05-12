// Notação Literal - novidades

const a = 1, b = 2 , c = 3

const obj1 = { a: a, b: b, c: c}
const obj2 = { a, b, c } // nodo reduzido
console.log( obj1, obj2 )

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
const obj4 = {[nomeAttr]: valorAttr}
console.log( obj3, obj4 )

const obj5 = {
    funcao1: function() {
        // forma tradicional
    },
    funcao2() {
        // forma reduzida
    }
}
console.log(obj5)