process.env.NODE_ENV = 'test'

//Require the dev-dependencies
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../src/app')
const should = chai.should()

chai.use(chaiHttp);

describe('GET accounts', () => {
  it('it should get all the user accounts', (done) => {
    chai.request(server)
      .get('/v2/accounts')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.an('array').that.is.not.empty;
        done()
      })
  })

  it('it should get a user account with IBAN', (done) => {
    chai.request(server)
      .get('/v2/accounts/IBAN123123123123123')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.an('object')
        res.body.should.have.property('iban').eql('IBAN123123123123123')
        res.body.should.have.nested.property('balance.value').eql(123.456)
        done()
      })
  })

  it('it should return account not found error message', (done) => {
    chai.request(server)
      .get('/v2/accounts/IBANUNKNOWN')
      .end((err, res) => {
        res.should.have.status(404)
        done()
      })
  })
})

describe('POST account', () => {
  const account = {
    iban: "IBAN9999999999999",
    balance : {
      currency : "EUR",
      value : 1000000.00
    }
  }

  it('it add a new account', (done) => {
    chai.request(server)
      .post('/v2/accounts')
      .send(account)
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.an('object')
        res.body.should.have.property('iban').eql('IBAN9999999999999')
        res.body.should.have.nested.property('balance.value').eql(1000000.00)
        done()
      })
  })
})
