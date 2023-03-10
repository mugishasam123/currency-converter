const app = require('../server') // assuming that your app is exported from app.js
const chai = require('chai')
const chaiHttp = require('chai-http')
const chaiFs = require('chai-fs');

chai.use(chaiHttp)
chai.use(chaiFs);
const expect = chai.expect

describe('GET /', function () {
  it('should return 200 code', function (done) {
    chai
      .request(app)
      .get('/')
      .end(function (err, res) {
        expect(res.status).to.equal(200)
        done();
      })
  })
})
