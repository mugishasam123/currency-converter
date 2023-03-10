const express = require('express')
const [currencyConvert, getCurrencySymbols] = require('../controllers/controller')

const router = express.Router();

router.get("/", getCurrencySymbols);
router.get("/convert", currencyConvert);


module.exports = router;