const fs = require('fs') // File System - modulo nativo Node

// __dirname constante que indica o diretorio atual
const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log('sincrono: ', conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log('assincrono: ', `${config.db.host}:${config.db.port}` )
})

// direto - sincrono / objeto
const config = require('./arquivo.json')
console.log('direto: ', `${config.db.host}:${config.db.port}` )

// ler Diretorio
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
}) 