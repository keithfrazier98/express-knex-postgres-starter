const path = require('path')
require('dotenv').config({path: path.join(__dirname, '..', '.env')})

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const samplesRouter = require('./samples/samples.router')
app.use('/', samplesRouter)


module.exports = app
