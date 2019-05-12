Array.prototype.filtro = function(callback) {
    const novoArray = [] 
    for ( let i = 0; i < this.length; i++)
        if (callback(this[i], i, this)) novoArray.push(this[i])
    return novoArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter( function(e) {
    return e.fragil
}))
console.log(produtos.filtro( function(e) {
    return e.preco > 500
}))