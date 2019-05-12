Array.prototype.map2 = function(callback) {
    const novoArray = []
    for ( let i = 0; i < this.length; i++) 
        novoArray.push(callback(this[i], i, this))        
    
    return novoArray
}

const numeros = [1, 2, 3, 4, 5]

const dobro = numeros.map( function(e) {
    return e * 2
})

console.log(numeros, dobro)

const soma10 = e => e + 10
const triplo = e => e * 3 
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

const resultado = numeros.map(soma10).map(triplo).map(paraDinheiro)
const resultado2 = numeros.map2(soma10).map2(triplo).map2(paraDinheiro)
console.log(resultado)
console.log(resultado2)

const numIndice = ( numero, indice ) => numero * indice
const novoNum = numeros.map2(numIndice)
console.log(novoNum)