const express = require('express');

const fruitController = require('../controllers/fruit-controller');

const router = express.Router();

router.get('/', fruitController.getIndex);

router.post('/', fruitController.create);

router.get('/:name', fruitController.getFruit);

router.patch('/:name', fruitController.update);

router.delete('/:name', fruitController.destroy);

module.exports = router;
