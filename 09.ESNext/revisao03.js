// ES8: 

const obj = { a: 1, b: 2, c: 3}
// Object.values
console.log(Object.values(obj))
// Object.entries
console.log(Object.entries(obj))

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente'
    }
}
console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}
const pug = new Cachorro()
console.log(pug.falar())