const Product = require('./product');

class SuperSaleCoverage extends Product {
  constructor(sellIn, price){
    super('Super Sale Coverage', sellIn, price);
  }

  updatePrice(){
    this.sellIn < 1 ?
      this.price = Math.max(0, Math.min(50, this.price - 4)) :
      this.price = Math.max(0, Math.min(50, this.price - 2));
  }
}

module.exports = SuperSaleCoverage;