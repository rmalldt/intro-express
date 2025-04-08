const Fruit = require('../models/Fruit');

exports.getIndex = async (req, res) => {
  try {
    const fruits = await Fruit.getAll();
    console.log('FRUITS: ', fruits);
    res.status(200).send(fruits);
  } catch (err) {
    res.status(500).send({ error: 'Server Error', message: err.message });
  }
};

exports.getFruit = (req, res) => {
  const name = req.params.name.toLowerCase();

  try {
    const fruit = Fruit.getFruit(name);
    res.status(200).send(fruit);
  } catch (err) {
    res.status(500).send({ error: 'Server Error', message: err.message });
  }
};

exports.create = async (req, res) => {
  console.log(req.body);
  try {
    const newFruit = await Fruit.create(req.body);
    res.status(201).send(newFruit);
  } catch (err) {
    res.status(409).send({ error: err });
  }
};

exports.update = async (req, res) => {
  const name = req.params.name.toLowerCase();

  console.log('RESULR BODY: ', req.body);

  try {
    const fruit = await Fruit.getFruit(name);
    console.log('FRUIT: ', fruit);
    const result = await fruit.update(req.body);
    return res.status(201).send(result);
  } catch (err) {
    res.status(409).send({ error: err });
  }
};

exports.destroy = async (req, res) => {
  const name = req.params.name.toLowerCase();
  try {
    const fruit = await Fruit.getFruit(name);
    const result = await fruit.destroy();
    res.sendStatus(204);
  } catch (err) {
    res.status(404).send({ error: err });
  }
};
