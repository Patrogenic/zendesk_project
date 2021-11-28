/**
 * Tests for ./utils/middleware.js using the Jest framework
 * The supertest utility is used, which will automatically start and close a local server to test the application's API
 */

const supertest = require('supertest');
const app = require('../app');
const logger = require('./logger')
const api = supertest(app);

describe('middleware', () => {
  it('should log data for every request', async () => {
    logger.info = jest.fn();
    await api.get('/api');

    expect(logger.info).toHaveBeenCalledTimes(4);
  });
  it('should send a status code of 404 and report an error when an unknown endpoint is hit', async () => {
    const response = await api.get('/api/ticket')
      .expect(404);

    const errorMessage = JSON.parse(response.text);
    expect(errorMessage.error).toBe("unknown endpoint");
  });
});