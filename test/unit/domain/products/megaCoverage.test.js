const {MegaCoverage} = require('../../../../src/domain/products');

describe('MegaCoverage', () => {

  it('Should create a new Mega Coverage Product instance', () => {
    const product = new MegaCoverage(10, 80);
    expect(product).to.be.an('object').to.have.property('name', 'Mega Coverage');
    expect(product).to.be.an('object').to.have.property('sellIn', 10);
    expect(product).to.be.an('object').to.have.property('price', 80);
  });

  it('Should maintain the same price', () => {
    const product = new MegaCoverage(10, 80);
    product.updatePrice();
    expect(product).to.have.property('price', 80);
  })
})