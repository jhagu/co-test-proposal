class Product {
  constructor(name, sellIn, price){
    this.name = name;
    this. sellIn = sellIn;
    this.price = price;
  }
  
  updatePrice(){
    this.sellIn < 1 ? 
      this.price = Math.max(0, Math.min(50, this.price -2 )) :
      this.price = Math.max(0, Math.min(50, this.price -1 ));
  }

  updateSellIn(){
    this.sellIn -= 1;
  }
}

module.exports = Product;