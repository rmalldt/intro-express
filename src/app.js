const express = require('express');
const cors = require('cors');
const fruitRoutes = require('./routes/fruits-route');

const app = express();

app.use(cors); // cors
app.use(express.json()); // json body parser

app.get('/', (req, res) => {
  return res.send({
    message: 'Hello fruity. Search your favourite fruit information.',
  });
});

app.use('/fruits', fruitRoutes);

app.use((req, res) => {
  res.statusCode = 404;
  res.send();
});

module.exports = app;
