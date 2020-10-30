'use strict';

require('@code-fellows/supergoose');

const Category = require('../lib/models/categories/categories-collection');
const category = new Category();
const Product = require('../lib/models/products/products-collection');
const product = new Product();


describe('Category Model', () => {
  it('testing create() method ', async () => {
    const categoryObj = { name: 'laptops', display_name: 'laptops', description: 'category to let you buy anything for your laptop' };
    const result = await category.create(categoryObj);
    Object.keys(categoryObj).forEach(key => {
      expect(result[key]).toEqual(categoryObj[key]);
    });
  });

  it('testing get() method ', async () => {
    const categoryObj = { name: 'laptops', display_name: 'laptops', description: 'category to let you buy anything for your laptop' };
    const result = await category.create(categoryObj);
    const records = await category.get(result._id); // []
    Object.keys(categoryObj).forEach(key => {
      expect(records[0][key]).toEqual(categoryObj[key]);
    });
  });

  it('testing delete() method ', async () => {
    const categoryObj = { name: 'laptops', display_name: 'laptops', description: 'category to let you buy anything for your laptop' };
    const result = await category.create(categoryObj);
    const records = await category.delete(result._id);
    Object.keys(categoryObj);
    expect(records.key).toEqual(categoryObj.key);

  });

  it('testing update() method ', async () => {
    const categoryObj = { name: 'laptops', display_name: 'laptops', description: 'category to let you buy anything for your laptop' };
    const newCategoryObj = { name: 'cars', display_name: 'cars', description: 'category to let you buy anything for your car' };
    const result = await category.create(categoryObj);
    const records = await category.update(result._id, newCategoryObj);

    Object.keys(categoryObj);
    expect(records.key).toEqual(newCategoryObj.key);

  });

});

describe('product Model', () => {
  it('testing create() method ', async () => {
    const productObj = { name: 'Car Charger USB', category: 'cars', display_name: 'Car Charger Waterproof Dual USB', description: 'USB that can be used in the car to charge your mobile' };
    const result = await product.create(productObj);
    Object.keys(productObj).forEach(key => {
      expect(result[key]).toEqual(productObj[key]);
    });
  });

  it('testing get() method ', async () => {
    const productObj = { name: 'Car Charger USB', category: 'cars', display_name: 'Car Charger Waterproof Dual USB', description: 'USB that can be used in the car to charge your mobile' };
    const result = await product.create(productObj);
    const records = await product.get(result._id); // []
    Object.keys(productObj).forEach(key => {
      expect(records[0][key]).toEqual(productObj[key]);
    });
  });

  it('testing delete() method ', async () => {
    const productObj = { name: 'Car Charger USB', category: 'cars', display_name: 'Car Charger Waterproof Dual USB', description: 'USB that can be used in the car to charge your mobile' };
    const result = await product.create(productObj);
    const records = await product.delete(result._id);
    Object.keys(productObj);
    expect(records.key).toEqual(productObj.key);

  });

  it('testing update() method ', async () => {
    const productObj = { name: 'Car Charger USB', category: 'cars', display_name: 'Car Charger Waterproof Dual USB', description: 'USB that can be used in the car to charge your mobile' };
    const newategoryObj = { name: 'mobile Charger ', category: 'cars', display_name: 'Car Charger Waterproof Dual USB', description: 'USB that can be used in the car to charge your mobile' };
    const result = await product.create(productObj);
    const records = await product.update(result._id, newategoryObj);

    Object.keys(productObj);
    expect(records.key).toEqual(newategoryObj.key);

  });

});