// Class vs Factory vs Contrutora

// Class
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Neu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

// Factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()

// Contrutora
function FalaPessoa(nome) {
    this.fala = () => console.log(`Meu nome é ${nome}`)
}

const p3 = new FalaPessoa('João')
p3.fala()