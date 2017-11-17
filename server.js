'use strict';

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

const _PORT_ = 8080
const dogs = [
  {
    name: "Duke",
    breed: "German Sheperd"
  },
  {
    name: "Linus",
    breed: "Beagle"
  }
]

app.get('/v2/dogs', (req, res) => res.send(dogs))

app.get('/v2/dogs/:id', (req, res) => {
  if (dogs.length > req.params.id)
    res.send(dogs[req.params.id])

  res.status(404).send({ error: { code: 404, description: 'dog not found'}})
})

app.post('/v2/dogs', (req, res) => {
  dogs.push(req.body)
  res.send(req.body)
})

app.listen(_PORT_, () => console.log(`Dogs Frontend Running on Port http://localhost/${_PORT_}!`))
