console.log(typeof Array, typeof new Array, typeof [], typeof {}, typeof '')

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log (aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log (aprovados)
console.log(aprovados[1])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados)
console.log(aprovados[8] === undefined)
aprovados.sort()
console.log(aprovados)
console.log(aprovados[1])

// delete - equivale a definir um elemento como undefined
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados)

// .splice - remove e também pode inserir 
// .splice(índece [inicio], total de elementos[apaganos], novos elementos (separados po vírgula) )
aprovados.splice(6, 4, 'André' ,'Érica')
console.log(aprovados)






