'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')
const app = express()
const contrl = require('./controllers')
const pool = require('./database')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/product', (req, res) => { contrl.postProducto(req, res, pool) })
app.get('/product', (req, res) => { contrl.getProducto(req, res, pool) })
app.put('/product', (req, res) => { contrl.putProducto(req, res, pool) })
app.post('/user', (req, res) => { contrl.postUser(req, res, pool) })
app.get('/user', (req, res) => { contrl.getUser(req, res, pool) })
app.post('/pedido', (req, res) => { contrl.postPedido(req, res, pool) })
app.get('/pedido', (req, res) => { contrl.getPedido(req, res, pool) })
app.post('/dispositivo', (req, res) => { contrl.postDispositivo(req, res, pool) })
app.get('/dispositivo', (req, res) => { contrl.getDispositivo(req, res, pool) })

app.listen(config.port, () => {
  console.log(`Servidor corriendo en el puerto ${config.port}`)
})
