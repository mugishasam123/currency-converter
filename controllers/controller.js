const axios = require('axios');
const data = require('../data/currency-symbols')

const getCurrencySymbols = (req, res) => {
  res.render('index', {currencySymbols: data});
}

const currencyConvert = async (req,res) => {
    const { fromCurrency, toCurrency, amount } = req.query;
    try {
        if(fromCurrency === null || fromCurrency === null || amount === null) {
            res.render('error')
        }
      const response = await axios.get(`https://api.apilayer.com/fixer/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`, {
        headers: {
          apikey: process.env.API_KEY,
        }
      });
      const result = response.data;
      res.render('result', { amount, fromCurrency, toCurrency, result });
    } catch (error) {
      console.error(error);
      res.render('error');
    }
}

module.exports = [currencyConvert, getCurrencySymbols]