const {LowCoverage} = require('../../../../src/domain/products');

describe('LowCoverage', () => {

  it('Should create a new Low Coverage Product instance', () => {
    const product = new LowCoverage(10, 50);
    expect(product).to.be.an('object').to.have.property('name', 'Low Coverage');
    expect(product).to.be.an('object').to.have.property('sellIn', 10);
    expect(product).to.be.an('object').to.have.property('price', 50);
  });
})