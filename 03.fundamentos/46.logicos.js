function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const compraTv32 = !!(trabalho1 ^ trabalho2) // bitwase XOR
    const comprarTv32 = trabalho1 != trabalho2
    const mamterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTv50, comprarTv32, mamterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))