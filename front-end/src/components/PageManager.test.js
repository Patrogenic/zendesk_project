import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import PageManager from './PageManager'
import { generateTickets } from '../helpers/test-helpers'

describe('PageManager', () => {
  let component;

  //testing for 4 full pages
  describe('100 tickets', () => {
    let tickets = generateTickets(100);

    beforeEach(() => {
      component = render(
        <PageManager tickets={tickets} />
      )
    });

    it('should render content', () => {
      //Page 1 of 4 (initial render)
      expect(component.container).toHaveTextContent("1. subject1");
      expect(component.container).toHaveTextContent("25. subject25");
      expect(component.container).not.toHaveTextContent("26. subject26");
    });

    it('should render the "Next Page" button and not the "Prev Page" button', () => {
      expect(component.container.querySelectorAll("button").length).toBe(1);
      expect(component.getByText("Next Page")).toBeDefined();
    });

    it('should change rendered content when "Next Page" button is pressed', () => {
      const nextPageBtn = component.getByText("Next Page");
      fireEvent.click(nextPageBtn);
  
      //Page 2 of 4
      expect(component.container).toHaveTextContent("26. subject26");
      expect(component.container).toHaveTextContent("50. subject50");
      expect(component.container).not.toHaveTextContent("51. subject51");

      //both prev and next buttons should be rendered
      expect(component.container.querySelectorAll("button").length).toBe(2);
  
      fireEvent.click(nextPageBtn);
      fireEvent.click(nextPageBtn);
  
      //Page 4 of 4
      expect(component.container).toHaveTextContent("76. subject76");
      expect(component.container).toHaveTextContent("100. subject100");
      expect(component.container.querySelectorAll("button").length).toBe(1);
      expect(component.getByText("Prev Page")).toBeDefined();
    });

    it('should change rendered content when "Prev Page" button is pressed', () => {
      const nextPageBtn = component.getByText("Next Page");
      fireEvent.click(nextPageBtn);
      fireEvent.click(nextPageBtn);
      fireEvent.click(nextPageBtn);
  
      const prevPageBtn = component.getByText("Prev Page");
      fireEvent.click(prevPageBtn);
  
      //Page 3 of 4
      expect(component.container).toHaveTextContent("51. subject51");
      expect(component.container).toHaveTextContent("75. subject75");
      expect(component.container).not.toHaveTextContent("76. subject76");

      //both prev and next buttons should be rendered
      expect(component.container.querySelectorAll("button").length).toBe(2);
  
      fireEvent.click(prevPageBtn);
      fireEvent.click(prevPageBtn);
  
      //Page 1 of 4
      expect(component.container).toHaveTextContent("1. subject1");
      expect(component.container).toHaveTextContent("25. subject25");
      expect(component.container.querySelectorAll("button").length).toBe(1);
      expect(component.getByText("Next Page")).toBeDefined();
    });
  });

  //testing for only 1 page
  describe('24 tickets', () => {
    let tickets = generateTickets(24);

    beforeEach(() => {
      component = render(
        <PageManager tickets={tickets} />
      )
    });
    
    it('should render content', () => {
      expect(component.container).toHaveTextContent("1. subject1");
      expect(component.container).toHaveTextContent("24. subject24");
      expect(component.container).not.toHaveTextContent("25. subject25");
    });
    
    it('should not have buttons rendered', () => {
      expect(component.container.querySelectorAll("button").length).toBe(0);
    });
  });
});