/**
 * Application configuration details loaded from a .env file
 */

var path = require('path');
require('dotenv').config({path: path.join(__dirname, 'process.env')});

const PORT = process.env.PORT;
const PASSWORD = process.env.PASSWORD
const USERNAME = process.env.USERNAME

module.exports = {
  PORT, PASSWORD, USERNAME
}