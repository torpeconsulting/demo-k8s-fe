'use strict';

const location = require('./loc')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

const _PORT_ = 8080

// Our modules.
const accountRoutes = require('./routes/accounts')

app.use(accountRoutes)

app.get('/health', (req, res) => res.send('I am alive!'))

app.get('/v2/location/:city', (req, res) => {
  location.get_city_location(req.params.city)
    .then(success => {
      res.send(success).sendStatus(200)
    })
    .catch(error => {
      res.send(error).sendStatus(500)
    })
})

app.listen(_PORT_, () => console.log(`Kubernetes Banking Frontend is Running on Port ${_PORT_}`))

module.exports = app; // for testing
