/**
 * Abstraction of the application's logging in case I want to extend its functionality (i.e. write to files)
 */

const info = (...params) => {
  console.log(...params);
}

const error = (...params) => {
  console.error(...params);
}

module.exports = {
  info, error
}