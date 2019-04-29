function tratarErroELancar(erro){
    // throw new Error('...')
    // throw 10
    // throw true
    // trow 'mensagem'
    // throw erro.message
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!!')        
    } catch (e) {
        tratarErroELancar(e)        
    }  finally {
        console.log('Final')
    }  
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)