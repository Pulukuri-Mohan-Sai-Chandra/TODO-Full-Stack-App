const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    // createdBy: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'user'
    // },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('tasks', TaskSchema)