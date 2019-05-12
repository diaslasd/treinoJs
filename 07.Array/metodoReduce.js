Array.prototype.reduce2 = function(callback,valorInicial) {
    let resultado = this[0],
        index = 1
    if ( valorInicial !== 'undefined' ) {
        resultado = valorInicial
        index = 0
    } 
    for (index; index < this.length; index++) 
        resultado = callback( resultado, this[index], index, this )
    return resultado
}

const numeros = [ 1, 2, 3, 4]
const soma = ( valor, atual ) => valor + atual

console.log( numeros.reduce(soma ))
console.log( numeros.reduce2( soma , 25 ))