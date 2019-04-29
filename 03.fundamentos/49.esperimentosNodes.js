// no browser "windows"
// no Nodes "global"

let a = 3
console.log(global.a)
var b = 4
console.log(global.b)
c = 5 // não faça isso
console.log(global.c)
this.e = 6
console.log(module.exports.e)
this.f = 7
console.log(module.exports)