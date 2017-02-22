'use strict'
const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const config = require('./config')
const app = express()
const pool = mysql.createPool({
  connectionLimit: 100,
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/products', (req, res) => {
  let query = 'INSERT INTO Productos SET ?'
  pool.getConnection((err, connection) => {
    if (err) res.status(500).send(`Ocurrio un error al obtener los usuarios ${err}`)
    else console.log(`Se obtuvo exitosamente una conexion a la base de datos`)
    connection.query(query, req.body, (err, rows) => {
      if (err) res.status(500).send(`Error en el servidor ${err}`)
      else res.status(200).send(`Se ha ingresado con exito el proudcto`)
    })
  })
})

app.get('/products', (req, res) => {
  let query = 'SELECT * FROM Productos'
  pool.getConnection((err, connection) => {
    if (err) res.status(500).send(`Ocurrio un error al obtener los usuarios ${err}`)
    else console.log(`Se obtuvo exitosamente una conexion a la base de datos`)
    connection.query(query, (err, rows) => {
      connection.release()
      if (err) res.status(500).send(`Error en el servidor ${err}`)
      else res.status(200).send(rows)
    })
  })
})

app.get('/user', (req, res) => {
  let query = 'SELECT * FROM Cliente'
  pool.getConnection((err, connection) => {
    if (err) res.status(500).send(`Ocurrio un error al obtener los usuarios ${err}`)
    else console.log(`Se obtuvo exitosamente una conexion a la base de datos`)
    connection.query(query, (err, rows) => {
      connection.release()
      if (err) res.status(500).send(`Error en el servidor ${err}`)
      else res.status(200).send(rows)
    })
  })
})

app.post('/user', (req, res) => {
  let query = 'INSERT INTO Cliente SET ?'
  pool.getConnection((err, connection) => {
    if (err) res.status(500).send({ message: `Ocurrio un error en el servidor ${err}` })
    else console.log(`Se obtuvo exitosamente una conexion a la base de datos`)
    connection.query(query, req.body, (err, rows) => {
      connection.release()
      console.log(req.body)
      if (err) res.status(500).send({ message: `Ocurrio un error al ingresar el usuario ${err}` })
      else res.status(200).send({ message: `Se ha ingresado con exito el usuario` })
    })
  })
})

app.listen(config.port, () => {
  console.log(`Servidor corriendo en el puerto ${config.port}`)
})
