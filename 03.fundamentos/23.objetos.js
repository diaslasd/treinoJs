// Chaves "{}" para criar Objeto

const prod1 = {};
prod1.nome = 'Celular Lg'
prod1.preco = 999.00
prod1['desconto'] = 0.20
prod1.final = (prod1.preco - 
    (prod1.preco * prod1.desconto)).toFixed(2)

console.log(prod1)

let prod2 =  {
    nome: 'Camisa',
    preco: 99.99
}
console.log(prod2)