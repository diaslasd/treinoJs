let dobro = function (a) {
    return a * 2
}
console.log(dobro(3))

//arrow
dobro = a => {
    return 2 * a
}
console.log(dobro(4))

dobro = a => 2 * a
console.log(dobro(5))

let ola = () => 'Olá'
console.log(ola())

// this com arrow não precisa usar bind
function Pessoa() {
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
new Pessoa
