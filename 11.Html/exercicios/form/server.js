const express = require('express')
const app =express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios/:id', (req, resp) => {
    let tipo = ( req.params.id == 0)? 'Incluído' : 'Alterado' 
    console.log(req.params.id)
    console.log(req.body)
    resp.send(`<h1>Parabéns - ${tipo}!</h1>`)

})

app.listen(3003)