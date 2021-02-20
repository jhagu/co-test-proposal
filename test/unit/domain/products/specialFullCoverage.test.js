const {SpecialFullCoverage} = require('../../../../src/domain/products');

describe('SpecialFullCoverage', () => {

  it('Should create a new Special Full Coverage Product instance', () => {
    const product = new SpecialFullCoverage(10, 50);
    expect(product).to.be.an('object').to.have.property('name', 'Special Full Coverage');
    expect(product).to.be.an('object').to.have.property('sellIn', 10);
    expect(product).to.be.an('object').to.have.property('price', 50);
  });

  it('Should update sellIn property', () => {
    const product = new SpecialFullCoverage(10, 50);
    product.updateSellIn();
    expect(product).to.have.property('sellIn', 9);
  });

  it('Should increase price in 1', () => {
    const product = new SpecialFullCoverage(11, 30);
    product.updatePrice();
    expect(product).to.have.property('price', 31);
  });
  
  it('Should increase price in 2', () => {
    const product = new SpecialFullCoverage(10, 30);
    product.updatePrice();
    expect(product).to.have.property('price', 32);
  });

  it('Should increase price in 3', () => {
    const product = new SpecialFullCoverage(5, 30);
    product.updatePrice();
    expect(product).to.have.property('price', 33);
  });

  it('Should set price to 0', () => {
    const product = new SpecialFullCoverage(0, 30);
    product.updatePrice();
    expect(product).to.have.property('price', 0);
  });
})