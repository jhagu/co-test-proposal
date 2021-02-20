const Product = require('./product');

class MegaCoverage extends Product {
  constructor(sellIn, price){
    super('Mega Coverage', sellIn, price);
  }

  updatePrice(){
    this.price = 80; 
  }
}

module.exports = MegaCoverage;