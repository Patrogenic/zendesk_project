import { waitFor, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';
import ticketService from './services/ticketService'
import { sampleTicketData } from './helpers/test-helpers'

describe('App', () => {
  let component;

  beforeEach(async () => {
    await waitFor(() => component = render(<App />));
  });

  it('should render content', () => {
    const mockApiResponse = { tickets: sampleTicketData };
    ticketService.getAll = jest.fn().mockReturnValue(mockApiResponse);

    expect(component.container).toHaveTextContent('Zendesk Ticket Viewer');
    expect(component.container).not.toHaveTextContent("Sorry, an error occurred getting the requested data.");
  });

  it('should render content when the api has an error getting tickets', () => {
    const mockApiResponse = undefined;
    ticketService.getAll = jest.fn().mockReturnValue(mockApiResponse);

    expect(component.container).toHaveTextContent('Zendesk Ticket Viewer');
    expect(component.container).toHaveTextContent("Sorry, an error occurred getting the requested data.");
  });
});