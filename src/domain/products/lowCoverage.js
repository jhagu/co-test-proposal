const Product = require('./product');

class LowCoverage extends Product {
  constructor(sellIn, price){
    super('Low Coverage', sellIn, price);
  }
}

module.exports = LowCoverage;