const bankAccount = require('../libs/bank-accounts-api')
const accounts = [
  {
    iban: "IBAN123123123123123",
    balance : {
      currency : "EUR",
      value : 123.4560000000000030695446184836328029632568359375
    }
  },
  {
    iban : "IBAN234234234234234",
    balance : {
      currency : "ZAR",
      value : 234.5670000000000072759576141834259033203125
    }
  }
]



module.exports.getAllUserAccounts = () => {
  return function getAllUserAccounts(req, res) {
    bankAccount.getUserAllAccounts()
      .then((success) => {
        res.status(200).send(success)
      })
      .catch((failure) => {
        res.status(failure.statusCode).send()
      })
  }
}

module.exports.getAccountByIban = () => {
  return function getAccountByIban(req, res) {
    bankAccount.getUserAccount(req.params.iban)
      .then((success) => {
        res.status(200).send(success)
      })
      .catch((failure) => {
        res.status(failure.statusCode).send()
      })
  }
}

module.exports.addNewAccount = () => {
  return function addNewAccount(req, res) {
    accounts.push(req.body)
    res.status(200).send(req.body)
  }
}
