const simulaArray = { 0:'Rafael', 1:'Ana', 2:'Bia' }
console.log(simulaArray)
console.log(simulaArray[1])

Object.defineProperty(simulaArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(simulaArray.toString(), meuArray)