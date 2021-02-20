const Product = require('./product');

class MediumCoverage extends Product {
  constructor(sellIn, price){
    super('Medium Coverage', sellIn, price);
  }
}

module.exports = MediumCoverage;