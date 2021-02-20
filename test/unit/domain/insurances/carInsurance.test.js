const { expect } = require('chai');
const {CarInsurance} = require('../../../../src/domain/insurances');
const {
  FullCoverage
} = require('../../../../src/domain/products');

const productsAtDayZero = [
  new FullCoverage(2, 0)
];

describe('CarInsurance', () => {
  it('Should create a new CarInsurance instance', () => {
    const carInsurance = new CarInsurance();
    expect(carInsurance).to.have.property('products');
  });

  it('Should update products properties', () => {
    const carInsurance = new CarInsurance(productsAtDayZero);
    carInsurance.updateProducts();
    expect(carInsurance.products[0]).to.be.an('object').to.have.property('name', 'Full Coverage');
    expect(carInsurance.products[0]).to.be.an('object').to.have.property('sellIn', 1);
    expect(carInsurance.products[0]).to.be.an('object').to.have.property('price', 1);
  });

});