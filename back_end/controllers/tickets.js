/**
 * Ticket controller is used to handle requests at /api/tickets
 * Requests are forwarded to a Zendesk API to interact with their ticket management system
 * Only GET requests are implemented
 */

const axios = require('axios');
const ticketsRouter = require('express').Router();
const config = require('../utils/config')
const baseUrl = "https://zccpatrick.zendesk.com/api/v2/tickets";

ticketsRouter.get('/', async (request, response) => {
  const auth = {
    username: config.USERNAME,
    password: config.PASSWORD,
  }

  try{
    const zendeskResponse = await axios.get(baseUrl, {auth});
    const responseData = zendeskResponse.data;
    response.status(200).json(responseData);
  }catch(error){
    response.status(error?.response?.status || 500).json(error);
  }
})

module.exports = ticketsRouter;