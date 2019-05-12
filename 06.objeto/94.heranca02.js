// cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0'
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: 'D'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr0)
console.log(filho.attr1)
console.log(filho.attr2)
console.log(filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing - sombrear
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari, volvo)

volvo.aceleraMais(100)
ferrari.aceleraMais(300)

console.log(volvo.status())
console.log(ferrari.status())

