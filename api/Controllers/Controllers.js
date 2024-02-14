const getAllTasks = (req, res) => {
    res.send('Got All Tasks')
}
const saveTask = (req, res) => {
    res.send('Saved the Task')
}
const updateTask = (req, res) => {
    res.send('Updated the Task')
}
const deleteTask = (req, res) => {
    res.send('Deleted the Task')
}



module.exports = {
    getAllTasks,
    saveTask,
    updateTask,
    deleteTask
}