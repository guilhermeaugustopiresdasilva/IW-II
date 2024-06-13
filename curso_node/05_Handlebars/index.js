const express = require('express')
const app = express()
const handlebars = require('express-handlebars')


// Config
    //Template Engine
    app.engine('handlebars',handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine','handlebars')

    //conexão Banco de Dados

//Rotas 
app.get('/cadastro', function(req,res){
    res.render('formulario')
})

app.post('/add',function(req,res){
    res.send('FORMULARIO RECEBIDO')
})


    app.listen(8081,function(){
    console.log("Servidor rodando na url http://localhost:8081")
})


