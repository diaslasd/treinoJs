const porta = 3003

const express = require('express')
const app = express()
const bancoDados = require('./bancoDados')

app.get('/produtos', (req, res, next) => {
    //console.log('Middleare 1...')
    //next()
    res.send(bancoDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDados.salvaProdutos({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

// app.get('/produtos', (req, res, next) => {
//     res.send( { nome: 'Notebook', preco: 123.45 }) // Convert para JSON
// })

app.listen( porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})
