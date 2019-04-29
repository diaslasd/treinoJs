let isAtivo = false
console.log(isAtivo)

console.log('os Verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!'texto')
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os Falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar')
console.log(!!('' || null || 0 || 'texto'))

let nome = '';
console.log( nome || 'Desconhecido')


