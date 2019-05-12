class Avo {
    constructor(sobrenome = 'Dias', idade) {
        this.sobrenome = sobrenome
        this.idade = idade
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
const pai = new Pai('Militar')
pai.idade = 48
console.log(filho)
console.log(pai)