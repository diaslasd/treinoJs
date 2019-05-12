const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]
console.log(carrinho)

// Retornar array com os preços de carrinho

// minha solução
const precos = carrinho.map( function(e) {
    return JSON.parse(e).preco
})
console.log(precos)

// solução do Instrutor
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)