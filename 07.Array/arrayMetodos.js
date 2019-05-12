const pilotos = [ 'Vetel', 'Alonso', 'Raikkonen', 'Massa' ]
console.log(pilotos)

pilotos.pop() // remove último elemento
console.log(pilotos)

pilotos.push('Verstappen') // adiciona elemento na útima posição
console.log(pilotos)

pilotos.shift() // remove primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona elemento na primeira posição
console.log(pilotos)

// splice pode adcionar e remover elementos

pilotos.splice(2,0,'Bottas', 'Massa') // adiciona
console.log(pilotos)

pilotos.splice(3, 1) // remove um elemento a parti do indice 3
console.log(pilotos)

// cria novo Array
const algunsPilotos1 = pilotos.slice(2) 
const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos1, algunsPilotos2)
