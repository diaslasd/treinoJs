/*  
    Objeto Map é um simples mapa de chave/valor que pode ter seus elementos 
iterados por ordem de inserção.
    Sendo possível adicionar novos pares, acessar, modificar e deletá-los. 
    Porém, com duas fundamentais diferenças:
        + qualquer objeto pode ser uma chave
        + um Map guarda a ordem dos pares
*/

const tecnologia = new Map()
tecnologia.set('react', { framework: false })
tecnologia.set('angular', { framework: false })

console.log( tecnologia.react )
console.log( tecnologia.get(`react`).framework )

const chaveVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Números']
])

chaveVariadas.forEach( (valor, chave) => {
    console.log( chave, valor )
})

console.log(chaveVariadas.has(123))
chaveVariadas.delete(123)
console.log(chaveVariadas.has(123))
console.log(chaveVariadas.size)

chaveVariadas.set(123, 'a')
chaveVariadas.set(123, 'b')
chaveVariadas.set(456, 'c')
console.log(chaveVariadas)