const request = require('request-promise')

exports.get_city_location = (city) => {
  var options = {
    method: 'GET',
    uri: `https://www.metaweather.com/api/location/search/?query=${city}`,
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
