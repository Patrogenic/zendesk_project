import axios from 'axios';

const baseUrl = 'http://localhost:3003/api/tickets';

const getAll = async () => {
  const response = await axios.get(baseUrl);

  return response.data;
}

const ticketService = {
  getAll
}

export default ticketService