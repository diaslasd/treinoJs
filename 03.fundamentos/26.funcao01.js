// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(4, 5, 6, 7)

// Funcao com retorno
function soma(a, b, c = 0) {
    return a + b + c
}
console.log(soma(2, 3))
console.log(soma(2, 3, 4))

// eu testando
function somaTudo(dados) {
    let tudo = dados.split(',');
    var total = 0;
    tudo.forEach(e => {
        total += parseInt(e);
    });
    return total;
}
console.log(somaTudo('1,2,3,4,5,6'))