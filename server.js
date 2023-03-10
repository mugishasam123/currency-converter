require('dotenv').config()
const express = require('express');
const routes = require('./routes/route')

const app = express();
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Serve static files from the 'public' folder
app.use(express.static('public'));
app.use(routes)

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = app;