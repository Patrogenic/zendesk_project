/**
 * ticketService is responsible for getting ticket data from server
 */

import axios from 'axios';

const baseUrl = 'http://localhost:3333/api/tickets';

const getAll = async () => {
  const response = await axios.get(baseUrl);

  return response.data;
}

const ticketService = {
  getAll
}

export default ticketService