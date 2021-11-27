/**
 * Some test helpers used to help with providing data for tests
 */


//some simple sample ticket data
const sampleTicketData = [
  {
    id: '1',
    subject: 'subject1',
    description: 'description1',
    status: 'status1',
  },
  {
    id: '2',
    subject: 'subject2',
    description: 'description2',
    status: 'status2',
  }
]

//function used to generate ticket data for test cases
const generateTickets = numOfTickets => {
  let tickets = [];

  for(let i = 1; i < numOfTickets + 1; i++){
    let tempTicket = {};
    tempTicket.id = i;
    tempTicket.subject = "subject" + i;
    tempTicket.description = "description" + i;
    tempTicket.status = "status" + i;

    tickets.push(tempTicket);
  }

  return tickets;
}

export { sampleTicketData, generateTickets }