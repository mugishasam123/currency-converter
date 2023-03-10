const sinon = require('sinon');
const chai = require('chai');
const axios = require('axios');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);
const expect = chai.expect;

describe('currencyConvert', () => {
  let axiosGetStub;

  beforeEach(() => {
    axiosGetStub = sinon.stub(axios, 'get');
  });

  afterEach(() => {
    axiosGetStub.restore();
  });

  it('should return an error page if any of the required parameters are missing', async () => {
    const res = await chai.request(app).get('/convert');
    expect(res).to.have.status(200);
  });

  it('should render the result page with the converted amount', async () => {
    const response = { data: 1.2345 };
    axiosGetStub.resolves(response);
    const res = await chai.request(app).get('/convert?fromCurrency=USD&toCurrency=EUR&amount=100');
    expect(res).to.have.status(200);
  });

  it('should return an error page if there is an error during the API call', async () => {
    const error = new Error('API call failed');
    axiosGetStub.rejects(error);
    const res = await chai.request(app).get('/convert?fromCurrency=USD&toCurrency=EUR&amount=100');
    expect(res).to.have.status(200);
  });
});
