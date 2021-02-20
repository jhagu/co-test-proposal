const {FullCoverage} = require('../../../../src/domain/products');

describe('FullCoverage', () => {

  it('Should create a new Full Coverage Product instance', () => {
    const product = new FullCoverage(10, 50);
    expect(product).to.be.an('object').to.have.property('name', 'Full Coverage');
    expect(product).to.be.an('object').to.have.property('sellIn', 10);
    expect(product).to.be.an('object').to.have.property('price', 50);
  });

  it('Should update sellIn property', () => {
    const product = new FullCoverage(10, 50);
    product.updateSellIn();
    expect(product).to.have.property('sellIn', 9);
  });
  
  it('Should increase price in 1', () => {
    const product = new FullCoverage(10, 49);
    product.updatePrice();
    expect(product).to.have.property('price', 50);
  });

  it('Should not change the price value', () => {
    const product = new FullCoverage(10, 50);
    product.updatePrice();
    expect(product).to.have.property('price', 50);
  });
})