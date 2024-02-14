const express = require('express')
const todoapp = new express()
require('dotenv').config();
const router = require('./AppRoutes')
const bodyParser = require('body-parser')
const cors = require('cors')
todoapp.use(bodyParser.urlencoded({ extended: false }))
todoapp.use(cors())
todoapp.use(router)

todoapp.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is Up at Running at port ${process.env.SERVER_PORT}`)
})