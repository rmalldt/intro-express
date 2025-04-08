const express = require('express');

const fruitRoutes = require('./routes/fruits-route');

const app = express();

// JSON body parser
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  return res.send({
    message: 'Hello fruity. Search your favourite fruit informations.',
  });
});

// Fruit route
app.use('/fruits', fruitRoutes);

// Catch all route
app.use((req, res) => {
  res.statusCode = 404;
  res.send();
});

module.exports = app;
