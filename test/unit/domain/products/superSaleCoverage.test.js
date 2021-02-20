const {SuperSaleCoverage} = require('../../../../src/domain/products');

describe('SuperSaleCoverage', () => {

  it('Should create a new Super Sale Coverage Product instance', () => {
    const product = new SuperSaleCoverage(10, 50);
    expect(product).to.be.an('object').to.have.property('name', 'Super Sale Coverage');
    expect(product).to.be.an('object').to.have.property('sellIn', 10);
    expect(product).to.be.an('object').to.have.property('price', 50);
  });

  it('Should update sellIn property', () => {
    const product = new SuperSaleCoverage(10, 50);
    product.updateSellIn();
    expect(product).to.have.property('sellIn', 9);
  });
  
  it('Should decrease price in 2', () => {
    const product = new SuperSaleCoverage(10, 50);
    product.updatePrice();
    expect(product).to.have.property('price', 48);
  });

  it('Should decrease price in 4', () => {
    const product = new SuperSaleCoverage(0, 50);
    product.updatePrice();
    expect(product).to.have.property('price', 46);
  });
})