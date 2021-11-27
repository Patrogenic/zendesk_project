/**
 * Ticket will display individual ticket data
 */

const Ticket = ({ ticket }) => {

  return(
    <div>
      <h3 style={{textAlign: "center"}}>{ticket.id}. {ticket.subject}</h3>
      <p><strong>Description:</strong> {ticket.description}</p>
      <p><strong>Status:</strong> {ticket.status}</p>
    </div>
  )
}

export default Ticket;