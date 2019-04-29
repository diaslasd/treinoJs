function getInteiroAleatorioEntre(min,max) {
    const valor = Math.random() * (max - min) + min //random gera um número entre 0 e 1
    return Math.floor(valor) // floor arredonda para baixo
}

let opcao = 0
let tentativas = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log('Opção escolida',opcao)
    tentativas++
}

console.log('Encontrou em ' + tentativas + ' tentativas.')