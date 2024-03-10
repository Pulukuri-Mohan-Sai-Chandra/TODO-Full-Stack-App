const express = require('express')
const AppRouter = express.Router();
const { deleteTask, getAllTasks, saveTask, updateTask, registerUser, loginuser } = require('./Controllers/Controllers')
const { handleErrors } = require('./middlewares/handleErrors')
AppRouter.get('/', (req, res) => res.send(200))


AppRouter.get('/tasks', getAllTasks, handleErrors)
AppRouter.post('/saveTask', saveTask, handleErrors)
AppRouter.post('/updateTask', updateTask, handleErrors)
AppRouter.post('/deleteTask', deleteTask, handleErrors)
AppRouter.post('/register', registerUser, handleErrors)
AppRouter.post('/login', loginuser, handleErrors)










module.exports = AppRouter