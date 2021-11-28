# Zendesk Ticket Viewer

I created a simple ticket viewer and used the [Zendesk API](https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/) to manage and store my tickets. I used Node.js and for the back end and React for the front end. 

## Installation

1. Make sure you have a recent version of [Node.js](https://nodejs.org/en/) installed.
2. Run the command ```npm install``` in both ```/front-end``` and ```/back_end``` .
3. You will need a ```process.env``` file in ```/back-end/utils``` specifying three parameters:

```
USERNAME={yourAccountEmail}
PASSWORD={yourPassword}
PORT={yourPort}
```

## Usage

1. ```npm start``` in ```/back_end``` 
2. ```npm start``` in ```/front-end```

Note: If React returns "There might be a problem with the project dependency tree" you may need to create a ```.env``` file with contents ```SKIP_PREFLIGHT_CHECK=true```, as suggested in the console output.

## Running Tests
Use ```npm run test``` in ```/back_end``` and ```/front-end```.
