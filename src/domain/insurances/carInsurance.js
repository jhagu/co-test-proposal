class CarInsurance {
  constructor(products = []){
    this.products = products;
  }
  updateProducts(){
    this.products.forEach(product => {
      product.updatePrice();
      product.updateSellIn();
    })
  }
}

module.exports = CarInsurance;