const porta = 3003

const express = require('express')
const app = express()
<<<<<<< HEAD
const bancoDados = require('./bancoDados')

=======
const bodyParser = require('body-parser')
const bancoDados = require('./bancoDados')

app.use(bodyParser.urlencoded({ extended: true}))

>>>>>>> 5f74d13c18670dc447e23ce8d30d6a59c9de67a3
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
<<<<<<< HEAD
        nome: req.body.name,
=======
        nome: req.body.nome,
>>>>>>> 5f74d13c18670dc447e23ce8d30d6a59c9de67a3
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

<<<<<<< HEAD
=======
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDados.salvaProdutos({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    res.send(bancoDados.excluirProduto(req.params.id))
})

>>>>>>> 5f74d13c18670dc447e23ce8d30d6a59c9de67a3
// app.get('/produtos', (req, res, next) => {
//     res.send( { nome: 'Notebook', preco: 123.45 }) // Convert para JSON
// })

app.listen( porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})
