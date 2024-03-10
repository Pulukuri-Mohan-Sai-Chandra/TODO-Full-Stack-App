const express = require('express')
const AppRouter = express.Router();
const { deleteTask, getAllTasks, saveTask, updateTask, registerUser, loginuser, verifyUser } = require('./Controllers/Controllers')
const { handleErrors } = require('./middlewares/handleErrors')
const {validateUser} = require('./Utils/verifyUser')
AppRouter.get('/', (req, res) => res.send(200))


AppRouter.get('/tasks',validateUser,getAllTasks, handleErrors)
AppRouter.post('/saveTask', validateUser,saveTask, handleErrors)
AppRouter.post('/updateTask',validateUser, updateTask, handleErrors)
AppRouter.post('/deleteTask',validateUser, deleteTask, handleErrors)
AppRouter.post('/register',validateUser, registerUser, handleErrors)
AppRouter.post('/login',loginuser, handleErrors)
AppRouter.post('/verifyUser',verifyUser,handleErrors)










module.exports = AppRouter