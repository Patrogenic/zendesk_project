import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Page from './Page'
import { sampleTicketData } from '../helpers/test-helpers'

describe('Page', () => {
  let component;

  const handleTicketChangeMock = jest.fn();

  beforeEach(() => {
    component = render(
      <Page tickets={sampleTicketData} onTicketChange={handleTicketChangeMock} />
    )
  });
  
  it('should render content', () => {
    expect(component.container).toHaveTextContent('1. subject1');
    expect(component.container).toHaveTextContent('2. subject2');
  })

  it('should display a back button and Ticket component when a ticket is clicked', () => {
    const ticket1 = component.getByText("1. subject1");
    fireEvent.click(ticket1);

    const backBtn = component.container.querySelector("button");

    expect(backBtn).toBeDefined();
    expect(backBtn.textContent).toBe("Back to Tickets");
    expect(component.container.querySelector("Ticket")).toBeDefined();
  });

  it('should call event handler and update view when "Back to Tickets" button is clicked', () => {
    //perform ticket click first in order to display and test back button
    const ticket1 = component.getByText("1. subject1");
    fireEvent.click(ticket1);

    const backBtn = component.getByText("Back to Tickets");
    fireEvent.click(backBtn);

    expect(handleTicketChangeMock).toHaveBeenCalled();
    expect(component.container.querySelector("button")).toBeNull();
  });
});