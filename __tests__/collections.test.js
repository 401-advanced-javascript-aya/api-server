'use strict';
require('@code-fellows/supergoose');
const proModel = require('../lib/models/products/products-collection');
const cateModel = require('../lib/models/categories/categories-collection');

let obj = {
  name: 'laptops',
  display_name: 'laptops',
  description: 'category to let you buy anything for your laptop',
};
let newObj = {
  name: 'cars',
  display_name: 'cars',
  description: 'category to let you buy anything for your car',
};

describe('Products models', () => {
  it('should respond properly on GET request to /products', () => {
    return proModel.create(obj).then(() => {
      return proModel.get().then((results) => {
        Object.keys(obj).forEach((element) => {
          expect(results[0][element]).toBe(obj[element]);
        });
      });
    });
  });
  it('should respond properly on POST request to /products', () => {
    return proModel.create(obj).then((results) => {
      Object.keys(obj).forEach((element) => {
        expect(results[element]).toBe(obj[element]);
      });
    });
  });
  it('should respond properly on PUT request to /products', () => {
    return proModel.create(obj).then((record) => {
      return proModel.update(record._id, newObj).then(() => {
        return proModel.get(record._id).then((resultse) => {
          Object.keys(obj).forEach((element) => {
            expect(resultse[0][element]).toBe(newObj[element]);
          });
        });
      });
    });
  });
  it('should respond properly on GET request to /products', () => {
    return proModel.create(obj).then((record) => {
      return proModel.delete(record._id).then((results) => {
        Object.keys(obj).forEach((element) => {
          expect(results[element]).toBe(obj[element]);
        });
      });
    });
  });
});

describe('categories models', () => {
  it('should respond properly on GET request to /categories', () => {
    return cateModel.create(obj).then(() => {
      return cateModel.get().then((results) => {
        Object.keys(obj).forEach((element) => {
          expect(results[0][element]).toBe(obj[element]);
        });
      });
    });
  });
  it('should respond properly on POST request to /categories', () => {
    return cateModel.create(obj).then((results) => {
      Object.keys(obj).forEach((element) => {
        expect(results[element]).toBe(obj[element]);
      });
    });
  });
  it('should respond properly on PUT request to /categories', () => {
    return cateModel.create(obj).then((record) => {
      return cateModel.update(record._id, newObj).then(() => {
        return cateModel.get(record._id).then((resultse) => {
          Object.keys(obj).forEach((element) => {
            expect(resultse[0][element]).toBe(newObj[element]);
          });
        });
      });
    });
  });
  it('should respond properly on GET request to /categories', () => {
    return cateModel.create(obj).then((record) => {
      return cateModel.delete(record._id).then((results) => {
        Object.keys(obj).forEach((element) => {
          expect(results[element]).toBe(obj[element]);
        });
      });
    });
  });
});