const mongoose = require('mongoose')

const dbConnect = async () => {

    try {
        await mongoose.connect('mongodb://localhost:27017/todo-app')
        console.log(' Database Connected Successfully')
    }
    catch (e) {
        console.log('Database Connections Unsucessfull')
    }
}
dbConnect();
module.exports = dbConnect;