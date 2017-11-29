
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

module.exports.getAllAccounts = () => {
  return function getAllUserAccounts(req, res) {
    res.status(200).send(accounts)
  }
}

module.exports.getAccountByIban = () => {
  return function getAccountByIban(req, res) {
    const account = accounts.find((array) => { return array.iban === req.params.iban })

    if (typeof account === 'undefined')
      res.status(404).send({ error: { code: 404, description: 'account not found'}})

    res.status(200).send(account)
  }
}

module.exports.addNewAccount = () => {
  return function addNewAccount(req, res) {
    accounts.push(req.body)
    res.status(200).send(req.body)
  }
}
