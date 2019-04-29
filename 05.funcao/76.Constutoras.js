function Carro(velocidadeMaxima = 150, delta = 20) {
    // privado
    let velociadeAtual = 0

    // publico
    this.acelera = function() {
        if (velociadeAtual + delta <= velocidadeMaxima) {
            velociadeAtual += delta
        } else {
            velociadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function() {
        return velociadeAtual
    }
}

const uno = new Carro
for (let i = 0; i < 10; i++) {
    uno.acelera()
    console.log(uno.getVelocidadeAtual())
}

const ferrari = new Carro(300,50)
ferrari.acelera()
ferrari.acelera()
console.log(ferrari.getVelocidadeAtual())