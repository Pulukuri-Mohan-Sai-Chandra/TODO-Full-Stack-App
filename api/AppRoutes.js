const express = require('express')
const AppRouter = express.Router();
const { deleteTask, getAllTasks, saveTask, updateTask } = require('./Controllers/Controllers')

AppRouter.get('/', (req, res) => res.send(200))


AppRouter.get('/tasks', getAllTasks)
AppRouter.post('/saveTask', saveTask)
AppRouter.post('/updateTask', updateTask)
AppRouter.post('/deleteTask', deleteTask)










module.exports = AppRouter