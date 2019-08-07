/*
    Objetos Set são coleções de valores. Você pode iterar seus elementos em ordem de inserção.
Um valor em um Set só pode ocorrer uma vez;  ele é único em uma coleção Set.

    A principal diferença conceitual entre objetos do tipo Set e arrays é que Set não aceita valores repetidos, 
ou seja, guarda somente valores únicos. Isso pode oferecer mais segurança no código.

    Set tem métodos de manipulação parecidos com Map: 
        add() para adicionar novos itens, 
        delete() para retirar o item (através do item, não do índice), 
        has() pra verificar se o item existe, 
        forEach() pra percorrê-lo, e muitos outros. 
        A propriedade size também está presente retornando o tamanho.
*/

// Não aceita repetiçã e não é indexado

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corintias')
times.add('Botafogo')
times.add('Vasco')
console.log(times, times.size)
console.log('vasco', times.has('vasco'))
console.log('Vasco', times.has('Vasco'))
times.delete('Palmeiras')
console.log('Palmeiras', times.has('Palmeiras'))
console.log(times)

const nomes = [ 'Raquel', 'Lucas', 'Julia', 'Lucas' ]
const nomesSet = new Set(nomes)
console.log(nomes, nomesSet)
nomes.forEach( (valores, i) => console.log(i, valores))
nomesSet.forEach( (valores, i) => console.log(i, valores))

