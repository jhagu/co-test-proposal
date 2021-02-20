const {MediumCoverage} = require('../../../../src/domain/products');

describe('MediumCoverage', () => {

  it('Should create a new Medium Coverage Product instance', () => {
    const product = new MediumCoverage(10, 50);
    expect(product).to.be.an('object').to.have.property('name', 'Medium Coverage');
    expect(product).to.be.an('object').to.have.property('sellIn', 10);
    expect(product).to.be.an('object').to.have.property('price', 50);
  });
})