import React, { useEffect, useState } from 'react'
import ticketService from './services/ticketService'
import PageManager from './components/PageManager'

function App() {
  const [ tickets, setTickets ] = useState([]);
  const [ errorMessage, setErrorMessage ] = useState("");

  const appStyle = {
    maxWidth: 800,
    margin: '0 auto'
  }

  const getTickets = async () => {
    try{
      let ticketsData = await ticketService.getAll();
      setTickets(ticketsData.tickets);
    }catch(error){
      setErrorMessage("Sorry, an error occurred getting the requested data.")
    }
  }

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <div style={appStyle}>
      <h1 style={{textAlign: "center"}}>Zendesk Ticket Viewer</h1>
      <PageManager tickets={tickets} />
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
}

export default App;
