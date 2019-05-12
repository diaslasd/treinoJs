/*  O que é exportado fica no module.exports
*   o this e o exports é uma referência para module.exports
*   o module.exports inicia como um Objeto vazio
*/ 

// console.log( module.exports === this )
// console.log( module.exports === exports )
// console.log( this, exports, module.exports )

this.a = 1
exports.b = 2
module.exports.c = 3

// this = null - erro
exports = null // não afeta dos dados exportados
module.exports = null // dados exportados ficam null
// console.log( this, exports, module.exports )

module.exports = this
// console.log( this, exports, module.exports )

ola = 'tudo bem' // variavel global também é exportada
// console.log(ola)
