/**
 * PageManager is responsible for creating and navigating pages
 */

import React, { useEffect, useState } from 'react'
import Page from './Page'

const PageManager = ({ tickets }) => {
  const PAGE_SIZE = 25;
  const [ pages, setPages ] = useState([]);
  const [ activePage, setActivePage ] = useState(0);
  const [ prevBtnActive, setPrevBtnActive ] = useState(false);
  const [ nextBtnActive, setNextBtnActive ] = useState(false);
  const [ showButtons, setShowButtons ] = useState(true)

  useEffect(() => {
    createPages();
  }, [tickets]);

  const handleTicketChange = (ticketValue) => {
    ticketValue > -1 ? setShowButtons(false) : setShowButtons(true);
  }

  //creates an array of Page elements using ticket data partitioned by PAGE_SIZE
  const createPages = () => {
    let tempPages = [];

    for(let i = 0; i < tickets.length / PAGE_SIZE; i++){
      let startIndex = i * PAGE_SIZE;

      if((startIndex + (i + PAGE_SIZE)) > tickets.length){
        tempPages.push(<Page key={i} onTicketChange={handleTicketChange} tickets={tickets.slice(startIndex, tickets.length)} />);
      }else{
        tempPages.push(<Page key={i} onTicketChange={handleTicketChange} tickets={tickets.slice(startIndex, startIndex + PAGE_SIZE)} />);
      }
    }
    setPages(tempPages);

    if(tempPages.length > 1){
      setNextBtnActive(true);
    }
  }

  const onPagePrevClick = (event) => {
    setActivePage(activePage - 1);

    if(activePage - 1 === 0){
      setPrevBtnActive(false);
    }else{
      setPrevBtnActive(true);
    }
    setNextBtnActive(true);
  }

  const onPageNextClick = (event) => {
    setActivePage(activePage + 1);

    if(activePage + 2 === pages.length){
      setNextBtnActive(false);
    }else{
      setNextBtnActive(true);
    }
    setPrevBtnActive(true);
  }

  return(
    <div>
      {showButtons && <div style={{display: "flex"}}>
        <span style={{margin: "auto"}}>
          {prevBtnActive && <button onClick={onPagePrevClick}>Prev Page</button>}
          {nextBtnActive && <button onClick={onPageNextClick}>Next Page</button>}
        </span>
      </div>}
      {pages.filter((page, i) => i === activePage)}
    </div>
  )
}

export default PageManager;