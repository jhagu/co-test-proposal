const Product = require('./product');

class SpecialFullCoverage extends Product {
  constructor(sellIn, price){
    super('Special Full Coverage', sellIn, price);
  }

  updatePrice(){
    if(this.sellIn > 10){
      this.price = Math.max(0, Math.min(50, this.price + 1));
    };
    if(this.sellIn <= 10 && this.sellIn >= 6){
      this.price = Math.max(0, Math.min(50, this.price + 2));
    };

    if(this.sellIn <= 5){
      this.price = Math.max(0, Math.min(50, this.price + 3));
    };
    if(this.sellIn < 1){
      this.price = 0;
    };
  }
}

module.exports = SpecialFullCoverage;