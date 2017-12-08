const request = require('request-promise')

exports.getUserAllAccounts = () => {
  var options = {
    method: 'GET',
    uri: 'http://localhost:8080/demo/rest/v1/bankaccounts',
    json: true
  }

  return new Promise((resolve, reject) => {
    request(options)
      .then((success) => {
        resolve(success)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

exports.getUserAccount = (iban) => {
  var options = {
    method: 'GET',
    uri: `http://localhost:8080/demo/rest/v1/bankaccounts/${iban}`,
    json: true
  }

  return new Promise((resolve, reject) => {
    request(options)
      .then((success) => {
        resolve(success)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
