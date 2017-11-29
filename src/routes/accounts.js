const express = require('express')
const router = express.Router()
const accountsModel = require('../models/accounts')

module.exports = router

router.get('/v2/accounts',
  accountsModel.getAllAccounts(),
  (req, res) => res.send()
)

router.get('/v2/accounts/:iban',
  accountsModel.getAccountByIban(),
  (req, res) => res.send()
)

router.post('/v2/accounts',
  accountsModel.addNewAccount(),
  (req, res) => res.send()
)
