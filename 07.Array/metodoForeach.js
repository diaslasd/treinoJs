const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach( nome => console.log(nome))

const exibe = nome => console.log(nome)
aprovados.forEach(exibe)

console.log('Definindo novo forEach')
console.log('...')
Object.defineProperty(aprovados, 'paraCada', {
    value: function(callback) {
        for (let index = 0; index < this.length; index++) {
            callback(this[index], index, this)            
        }         
    },
    enumerable: false
})
Array.prototype.forEach2 = function(callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index, 'Aprovado')            
    } 
}

aprovados.paraCada( ( nome, indice) => console.log(`${indice + 1}) ${nome}`))
aprovados.forEach2( ( nome, indice, aprov ) => console.log(`${indice + 1}) ${nome} - ${aprov}`))


