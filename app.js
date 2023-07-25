require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./router/router')
const connectToDatabase = require  ('./database/database')
const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

connectToDatabase()

app.use('/', router)

app.listen(8080, console.log('Servidor em produção.🟢'))