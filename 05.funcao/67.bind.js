// uso do this e bind
// o bind amarra a referencia do this e não deixa ele varia

const pessoa = {
    saudacao: "Olá",
    falar: function () {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falarBind = pessoa.falar.bind(pessoa)
falarBind()

function Pessoa() {
    this.idade = 0
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this),1000)
}

new Pessoa