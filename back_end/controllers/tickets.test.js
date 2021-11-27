/**
 * Tests for ./controllers/tickets.js using the Jest framework
 * The supertest utility is used, which will automatically start and close a local server to test the application's API
 */

const supertest = require('supertest');
const app = require('../app');
const { default: axios } = require('axios');
const api = supertest(app);

describe('ticketsRouter', () => {
  it('should send status code of 200 and return tickets as json', async () => {
    //mocking get requests to zendesk api
    axios.get = jest.fn().mockReturnValue({ data: { tickets: [] } });
    
    await api.get('/api/tickets')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });
  it('should send status code of 500 when an error happens', async () => {
    axios.get = jest.fn().mockReturnValue(undefined);

    await api.get('/api/tickets')
      .expect(500);
  });
});