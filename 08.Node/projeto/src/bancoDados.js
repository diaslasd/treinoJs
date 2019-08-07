const sequence = {
    _id: 1,
    get id() { return this._id++}    
}

const produtos = {}

function salvaProdutos(produto) {
    if ( !produto.id ) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

<<<<<<< HEAD
module.exports = { salvaProdutos, getProduto, getProdutos }
=======
function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvaProdutos, getProduto, getProdutos, excluirProduto }
>>>>>>> 5f74d13c18670dc447e23ce8d30d6a59c9de67a3
