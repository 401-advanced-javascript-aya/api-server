const { server } = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('api server', () => {
  it('should respond with 500 on an error', async () => {
    await mockRequest.get('/bad').then((results) => {
      expect(results.status).toBe(500);
    });
  });
  it('should respond with 404 on a wrong route', () => {
    return mockRequest.get('/foo').then((results) => {
      expect(results.status).toBe(404);
    });
  });
  it('should respond with 404 on a wrong method', () => {
    return mockRequest.post('/').then((results) => {
      expect(results.status).toBe(404);
    });
  });
  it('should respond with 201 for post', () => {
    return mockRequest.post('/products').then((results) => {
      expect(results.status).toBe(201);
    });
});
  it('should respond with 200 on a correct route', () => {
    return mockRequest.get('/products').then((results) => {
      expect(results.status).toBe(200);
    });
  });
  it('should respond with 200 on a correct route', () => {
    return mockRequest.put('/products/:id').then((results) => {
      expect(results.status).toBe(200);
    });
  });
 
it('should respond with 201 for post', () => {
    return mockRequest.delete('/products/:id').then((results) => {
      expect(results.status).toBe(200);
    });
});
it('should respond with 201 for post', () => {
    return mockRequest.post('/categories').then((results) => {
      expect(results.status).toBe(201);
    });
});
  it('should respond with 200 on a correct route', () => {
    return mockRequest.get('/categories').then((results) => {
      expect(results.status).toBe(200);
    });
  });
  it('should respond with 200 on a correct route', () => {
    return mockRequest.put('/categories/:id').then((results) => {
      expect(results.status).toBe(200);
    });
  });
 
it('should respond with 201 for post', () => {
    return mockRequest.delete('/categories/:id').then((results) => {
      expect(results.status).toBe(200);
    });
});
});