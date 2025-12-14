const request = require('supertest');
const app = require('../index');

test('Debe responder Hola Mundo DevOps', async () => {
  const response = await request(app).get('/');
  expect(response.text).toBe('Hola Mundo DevOps');
});
