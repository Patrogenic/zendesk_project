/**
 * Page will display ticket data partitioned by PageManager and manage swapping between Page view and Ticket view
 */

import React, { useEffect, useState, useImperativeHandle } from 'react'
import Ticket from './Ticket'

const Page = React.forwardRef(({ tickets, onTicketChange }, ref) => {
  const [ currTicket, setCurrTicket ] = useState(-1)

  const pageStyle = {
    marginBottom: 5,
    cursor: "pointer",
  }

  useEffect(() => {
    onTicketChange(currTicket);
  }, [currTicket])

  useImperativeHandle(ref, () => {
    return {currTicket};
  })

  const onTicketClick = (event) => {
    setCurrTicket(event.target.id);
  }

  const onBackClick = (event) => {
    setCurrTicket(-1);
  }

  if(currTicket >= 0){
    return(
      <div>
        <Ticket ticket={tickets[currTicket]} />
        <button onClick={onBackClick}>Back to Tickets</button>
      </div>
    )
  }
  return(
    <div>
      {tickets.map((ticket, i) => 
        <div style={pageStyle} id={i} key={ticket.id} onClick={onTicketClick}>{ticket.id}. {ticket.subject}</div>  
      )}
    </div>
  )
})

export default Page