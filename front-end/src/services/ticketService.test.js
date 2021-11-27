import axios from 'axios';
import ticketService from './ticketService';

describe('ticketService', () => {
  it('should make api call to get ticket data', async () => {
    axios.get = jest.fn().mockReturnValue({ data: { tickets: [] } });

    let ticketData;
    try{
      ticketData = await ticketService.getAll();
    }catch(error){
      console.log(error);
    }
    expect(axios.get).toHaveBeenCalled();
    expect(ticketData?.tickets).toEqual([]);
  });
});