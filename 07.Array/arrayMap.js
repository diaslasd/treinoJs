const numeros = [1, 2, 3, 4, 5]

const dobro = numeros.map( function(e) {
    return e * 2
})

console.log(numeros, dobro)

const soma10 = e => e + 10
const triplo = e => e * 3 
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

const resultado = numeros.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

