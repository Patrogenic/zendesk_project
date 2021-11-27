/**
 * All the middleware is imported and consumed here to be used by the application
 */

const express = require('express')
const app = express()
const cors = require('cors')
const ticketsRouter = require('./controllers/tickets')
const middleware = require('./utils/middleware')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/tickets', ticketsRouter)

app.use(middleware.unknownEndpoint)

module.exports = app