'use strict'

function postProducto (req, res, pool) {
  let query = 'INSERT INTO Productos SET ?'
  pool.getConnection((err, connection) => {
    if (err) res.status(500).send(`Ocurrio un error al conectar a la base de datos: ${err}`)
    else console.log(`Se obtuvo exitosamente una conexion a la base de datos`)
    connection.query(query, req.body, (err, rows) => {
      console.log(req.body)
      if (err) res.status(500).send(`Error en el servidor ${err}`)
      else res.status(200).send({ message: `Se ha ingresado con exito el proudcto` })
    })
  })
}

function putProducto (req, res, pool) {
  let query = 'UPDATE Productos SET ? where ID_Producto = 1'
  pool.getConnection((err, connection) => {
    if (err) res.status(500).send(`Ocurrio un error al conectar a la base de datos: ${err}`)
    else console.log(`Se obtuvo exitosamente una conexion a la base de datos`)
    connection.query(query, req.body, (err, rows) => {
      console.log(req.body)
      if (err) res.status(500).send(`Error en el servidor ${err}`)
      else res.status(200).send({ message: `Se ha actualizado con exito el proudcto` })
    })
  })
}

function getProducto (req, res, pool) {
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
}

function postUser (req, res, pool) {
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
}

function getUser (req, res, pool) {
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
}

function postPedido (req, res, pool) {
  let query = 'INSERT INTO PEDIDOS SET ?'
  pool.getConnection((err, connection) => {
    if (err) res.status(500).send({ message: `Ocurrio un error en el servidor ${err}` })
    else console.log(`Se obutvo exitosamente una conexion a la base de datos`)
    connection.query(query, req.body, (err, rows) => {
      connection.release()
      console.log(req.body)
      if (err) res.status(500).send({ message: `Ocurrio un error en el sevidor al intentar hacer tu pedido ${err}` })
      else res.status(200).send({ message: `Se ha creado tu pedido con exito` })
    })
  })
}

function getPedido (req, res, pool) {
  let query = 'SELECT * FROM Pedidos'
  pool.getConnection((err, connection) => {
    if (err) res.status(500).send(`Ocurrio un error al obtener los pedidos ${err}`)
    else console.log(`Se obtuvo exitosamente una conexion a la base de datos`)
    connection.query(query, (err, rows) => {
      connection.release()
      if (err) res.status(500).send(`Error en el servidor ${err}`)
      else res.status(200).send(rows)
    })
  })
}

function getDispositivo (req, res, pool) {
  let query = 'SELECT * FROM Dispositivo'
  pool.getConnection((err, connection) => {
    if (err) res.status(500).send(`Ocurrio un error al obtener los dispositivos ${err}`)
    else console.log(`Se obtuvo exitosamente una conexion a la base de datos`)
    connection.query(query, (err, rows) => {
      connection.release()
      if (err) res.status(500).send(`Error en el servidor ${err}`)
      else res.status(200).send(rows)
    })
  })
}

function postDispositivo (req, res, pool) {
  let query = 'INSERT INTO Dispositivo SET ?'
  pool.getConnection((err, connection) => {
    if (err) res.status(500).send({ message: `Ocurrio un error en el servidor ${err}` })
    else console.log(`Se obutvo exitosamente una conexion a la base de datos`)
    connection.query(query, req.body, (err, rows) => {
      connection.release()
      console.log(req.body)
      if (err) res.status(500).send({ message: `Ocurrio un error en el sevidor al intentar hacer tu pedido ${err}` })
      else res.status(200).send({ message: `Se ha agregado tu dispositivo con exito` })
    })
  })
}

module.exports = ({
  postProducto,
  putProducto,
  getProducto,
  postUser,
  getUser,
  postPedido,
  getPedido,
  postDispositivo,
  getDispositivo
})
