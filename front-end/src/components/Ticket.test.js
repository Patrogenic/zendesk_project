import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Ticket from './Ticket'

describe('Ticket', () => {
  const ticket = {
    id: '1',
    subject: 'subject',
    description: 'description',
    status: 'status',
  }
  
  it('should render content', () => {
    const component = render(
      <Ticket ticket={ticket} />
    )
  
    expect(component.container).toHaveTextContent('1. subject');
    expect(component.container).toHaveTextContent('Description: description');
    expect(component.container).toHaveTextContent('Status: status');
  })
});