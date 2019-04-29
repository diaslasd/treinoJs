// usando o VAR
for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i = ', i)

//usando o LET
for (let l = 0; l < 10; l++) {
    console.log(l)
}
//console.log('l = ', l) // Erro. l não definida

const funcs = []

// retorno NÃO esperado usando o VAR
for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
funcs[2]()
funcs[8]()

const funcsLet = []
// retorno esperado usando LET
for (let l = 0; l < 10; l++) {
    funcsLet.push(function() {
        console.log(l)
    })
}
funcsLet[2]()
funcsLet[8]()

