const Product = require('./product');

class FullCoverage extends Product {
  constructor(sellIn, price){
    super('Full Coverage',sellIn, price);
  }
  
  updatePrice(){
    this.price = Math.max(0, Math.min(50, this.price + 1));
  }
}

module.exports = FullCoverage;