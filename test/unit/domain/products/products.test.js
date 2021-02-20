const {Product} = require('../../../../src/domain/products');

describe('Product', () => {

  it('Should create a new Product instance', () => {
    const product = new Product('Product', 10, 50);
    expect(product).to.be.an('object').to.have.property('name', 'Product');
    expect(product).to.be.an('object').to.have.property('sellIn', 10);
    expect(product).to.be.an('object').to.have.property('price', 50);
  });

  it('Should update sellIn property', () => {
    const product = new Product('Product', 10, 50);
    product.updateSellIn();
    expect(product).to.have.property('sellIn', 9);
  });
  
  it('Should decrease price in 1', () => {
    const product = new Product('Product', 10, 50);
    product.updatePrice();
    expect(product).to.have.property('price', 49);
  });

  it('Should decrease price in 2', () => {
    const product = new Product('Product', 0, 50);
    product.updatePrice();
    expect(product).to.have.property('price', 48);
  });
})