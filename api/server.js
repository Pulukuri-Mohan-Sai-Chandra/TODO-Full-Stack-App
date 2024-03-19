const express = require('express')
const todoapp = new express()
require('dotenv').config();
const { v5: uuid } = require('uuid')
const cookie = require('cookie-parser')
const router = require('./AppRoutes')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./Database/dbconn')
const cookieParser = require('cookie-parser')
const { handleErrors } = require('./middlewares/handleErrors')
const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
todoapp.use(bodyParser.json())
todoapp.use(cookieParser())
todoapp.use(cors(corsOptions))
todoapp.use(router, handleErrors)

todoapp.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is Up at Running at port ${process.env.SERVER_PORT}`)
})