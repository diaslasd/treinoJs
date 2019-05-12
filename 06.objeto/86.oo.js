// coleção dinâmica de pares chaves/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérico'
produto.preco = 220
console.log(produto)

delete produto.nome
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    propietario: {
        nome: 'Andre',
        idade: 48,
        endecero: {
            logradouro: 'Rua Abc',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 21
    }],
    calcularValorSeguro: function(){
        console.log(this.valor * 0.1)
    }
}

carro.propietario.endecero.numero = 1000

console.log(carro)
carro.calcularValorSeguro()

console.log(typeof carro)