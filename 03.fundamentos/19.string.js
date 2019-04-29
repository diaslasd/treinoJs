const ESCOLA =  'Cod3r';

console.log(ESCOLA.charAt(4))
console.log(ESCOLA.charCodeAt(3))
console.log(ESCOLA.indexOf('3'))
console.log(ESCOLA.substring(1))
console.log(ESCOLA.substring(0, 3))
console.log(ESCOLA.substring(0, ESCOLA.length - 1))
console.log(ESCOLA.slice(0,-1))
console.log('Curso'.concat(ESCOLA))
console.log('Curso' + ESCOLA)
console.log(ESCOLA.replace('d','e'))
console.log(ESCOLA.replace(/\w/g,'x'))//expressão regular
console.log(ESCOLA.replace(/\d/g,'x'))
console.log('Ana,Maria,Andre'.split(','))
