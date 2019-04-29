// factory (fabrica) - criar objeto

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silvia'
    }
}

console.log(criarPessoa())

function criarProduto(nome, preco, porcentagem = 0.1) {
    return {
        nome,
        preco,
        porcentagem,
        desconto: (preco * porcentagem).toFixed(2),
        venda: (preco - (preco * porcentagem)).toFixed(2)
    }
}

console.log(criarProduto('Notebookk',2199.99))
console.log(criarProduto('Iphone',3199.99,0.25))