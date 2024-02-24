const express = require('express')
const todoapp = new express()
require('dotenv').config();
const { v5: uuid } = require('uuid')
const cookie = require('cookie-parser')
const router = require('./AppRoutes')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./Database/dbconn')
const { handleErrors } = require('./middlewares/handleErrors')
todoapp.use(bodyParser.json())
todoapp.use(cors())
todoapp.use(router, handleErrors)
todoapp.use(cookie())

todoapp.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is Up at Running at port ${process.env.SERVER_PORT}`)
})