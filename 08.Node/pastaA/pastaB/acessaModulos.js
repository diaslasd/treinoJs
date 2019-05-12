// requisição pasta relativa
const moduloA = require('../../moduloA')
console.log(moduloA.ola)

// requisição feita da pasta node_modules - tem que ter o arquivo index.js
const saudacao = require('saudacao')
console.log(saudacao.ola)

// criando index.js na pasta "08.Node"
const moduloPasta = require('../../../08.Node')
console.log(moduloPasta.ola)

// requisição de modulo nativo do node
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(7001) 
console.log('Abrir no browser - http://localhost:7001')

console.log('( ctrl + alt + m ) para encerar aplicação... ')