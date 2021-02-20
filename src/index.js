const { CarInsurance } = require('./domain/insurances');
const {
  FullCoverage,
  LowCoverage,
  MediumCoverage,
  MegaCoverage,
  SpecialFullCoverage,
  SuperSaleCoverage
} = require('./domain/products');

const productsAtDayZero = [
  new MediumCoverage(10, 20),
  new FullCoverage(2, 0),
  new LowCoverage(5, 7),
  new MegaCoverage(0, 80),
  new MegaCoverage(-1, 80),
  new SpecialFullCoverage(15, 20),
  new SpecialFullCoverage(10, 49),
  new SpecialFullCoverage(5, 49),
  new SuperSaleCoverage(3, 6)
];

const carInsurance = new CarInsurance(productsAtDayZero);

const buildOutputAfter30Days = () => {

  console.log('-------------day 0----------------');
  console.log(`name, sellIn, price`);
  carInsurance.products.forEach(({ name, sellIn, price }) => console.log(`${name}, ${sellIn}, ${price}`));
  console.log(``);

  for (let i = 1; i < 31; i++) {
    carInsurance.updateProducts();
    console.log(`-------------day ${i}----------------`);
    console.log(`name, sellIn, price`);
    carInsurance.products.forEach(({ name, sellIn, price }) => console.log(`${name}, ${sellIn}, ${price}`));
    console.log(``);
  }
}

module.exports = buildOutputAfter30Days;