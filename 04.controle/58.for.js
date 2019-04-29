let contador = 1
while (contador <= 10) {
    console.log(`Contador = ${contador}`)
    contador++
}

//for
for (let i = 1; i <= 10 ; i++) {
    console.log(`i = ${i}`)
}

const notas = [7.1, 8.5, 6.4, 9.2]
for (let i = 0; i < notas.length; i++) {
    console.log(`Notas 1 = ${notas[i]}`)
}

//forEach
notas.forEach(function(e) {
    console.log(`Notas 2 = ${e}`)
})


notas.forEach(e => {
    console.log(`Notas 3 = ${e}`)
})

//for in
for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silvia',
    idade: 20,
    peso: 64
}
for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}