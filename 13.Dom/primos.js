// Numeros primos
const numerosPrimos = [2]

async function pesquisaPrimos(numeroMax) {
  for(let i = 3; i <= numeroMax; i++ ) {
    let primo = true
    await numerosPrimos.forEach( e => {
      if ( (i % e) == 0 ) primo = false
    })
    if (primo) {
        numerosPrimos.push(i)
    }
  }
}

async function resultadoPrimos(numeroMax) {
    await pesquisaPrimos(numeroMax)
    console.log('total',numerosPrimos.length,numerosPrimos)
}

resultadoPrimos(500)



//console.log(numerosPrimos)