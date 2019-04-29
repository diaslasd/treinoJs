const valores = [1,2,3,4]
console.log(valores[0], valores[2])
console.log(valores[4])
console.log(valores)
console.dir(valores)

valores[7] = 8;
console.log(valores)
valores.push({id: 4}, false, null, 'teste')
console.dir(valores)