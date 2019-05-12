// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções contrutoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this. getPrecoComDesconto = () => {
        return (preco * (1 - desc)).toFixed(2)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.25)
const p2 = new Produto('Notebook', 2998.99, 0.15)
console.log(p1.nome, p1.getPrecoComDesconto())
console.log(p2.nome, p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSlario() {
            return ((salarioBase/30) * (30 - faltas)).toFixed(2)
        },
        setAumento(pocentage = 0.05) {
            this.salarioBase = Math.floor(this.salarioBase * (1 + pocentage))
        }
    }
}
const f1 = criarFuncionario('João', 7988, 4)
const f2 = criarFuncionario('Ana', 10000, 2)
console.log(f1.nome, f1.getSlario())
console.log(f2.nome, f2.getSlario())
f2.setAumento(0.1)
console.log(f2.salarioBase)

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Função famosa que retorna Objeto...
// JSON - JavaScript Object Notation
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)