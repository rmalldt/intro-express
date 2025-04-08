const fruits = require('../data/fruits.json');

// Class
class Fruit {
  constructor(fruit) {
    this.genus = fruit.genus;
    this.name = fruit.name;
    this.id = fruit.id;
    this.family = fruit.family;
    this.order = fruit.order;
    this.nutrients = fruit.nutrients;
  }

  static create(data) {
    const newFruit = data;
    newFruit['id'] = fruits.length + 1;
    fruits.push(newFruit);
    return new Fruit(newFruit);
  }

  static getAll() {
    if (!fruits) {
      throw new Error('No fruit list found');
    }
    return fruits.map(fruit => new Fruit(fruit));
  }

  static getFruit(fruitName) {
    const name = fruitName;
    const fruit = fruits.find(fruit => fruit.name.toLowerCase() == name);

    if (!fruit) {
      throw new Error('No fruit found');
    }

    return new Fruit(fruit);
  }

  update(data) {
    const updateFruit = fruits.find(fruit => {
      return fruit.name.toLowerCase() == this.name.toLowerCase();
    });

    if (updateFruit) {
      updateFruit.name = data.name;
      updateFruit.family = data.family;
      return new Fruit(updateFruit);
    } else {
      throw new Error('Fruit not found');
    }
  }

  destroy() {
    const deletedFruit = fruits.find(
      fruit => fruit.name.toLowerCase() === this.name.toLowerCase()
    );

    if (deletedFruit) {
      const index = fruits.indexOf(deletedFruit);
      fruits.splice(index, 1);
    } else {
      throw new Error('Fruit not found');
    }
  }
}

module.exports = Fruit;
