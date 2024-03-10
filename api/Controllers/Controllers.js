const task = require('../Models/Task')
const user = require('../Models/User')
const jwt = require('jsonwebtoken')
const { decodePassword } = require('../Utils/DecodePassword')
require('dotenv').config();
const getAllTasks = async (req, res) => {
    const values = await task.find({})
    res.json({ rows: values })
}
const saveTask = async (req, res) => {
    let response = {}
    try {
        const present = await task.find({ _id: req.body._id })
        if (present.length > 0) {
            const data = await task.findOneAndUpdate({ _id: req.body._id }, req.body)
            response = data;
        }
        else {

            const data = await new task(req.body).save();
            response = data
        }
    }
    catch (e) {
        response = { message: e.message }
    }
    res.json(response)

}
const updateTask = async (req, res) => {
    console.log(req.body)
    let response = {}
    try {
        let res = await task.findOneAndUpdate({ _id: req.body._id }, req.body)
        console.log("res -- ", res)
        response = res
    }
    catch (e) {
        response = { message: e.message }
    }
    res.json(response)
}
const deleteTask = async (req, res) => {
    let response = {}
    try {
        let res = await task.deleteOne({ _id: req.body._id })
        console.log('DEl -- res', JSON.stringfy(res))
        response = res;
    }
    catch (e) {
        response = { message: e.message }
    }

    res.json(response)
}

const _isUserPresent = async (email, res, next) => {
    try {
        const data = await user.find({ email: email });
        if (data.length > 0) {
            return true;
        }
        return false;
    }
    catch (e) {
        next(e, res)
    }
}
const registerUser = async (req, res, next) => {
    const { name, email, password } = req.body; ``
    console.log(await _isUserPresent(email, res, next))
    try {
        if (await _isUserPresent(email, res, next) === false) {
            console.log("Inside the User present cond")
            const data = await new user({ name, email, password }).save();
            res.status(201).json(data);
        }
        else {
            res.status(226).json({ message: "User Already Registered" })
        }
    }
    catch (e) {
        next()
    }

}

const loginuser = async (req, res, next) => {
    const { loginmail, loginpassword } = req.body;
    let response = {}
    try {
        const userdetails = await user.find({ email: loginmail })
        if (userdetails.length == 0) {
            response['message'] = "Not-Found"
        }
        else {
            console.log("User Details ", userdetails[0].password)
            console.log("LoginPasswod is ", loginpassword)
            if (decodePassword(userdetails[0].password) === decodePassword(loginpassword)) {
                response['message'] = 'Successfull'
            }
            else {
                response['message'] = 'Failed'
            }
        }
    }
    catch (e) {
        response['message'] = e.message;
    }
    res.status(200).json(response)
}
module.exports = {
    getAllTasks,
    saveTask,
    updateTask,
    deleteTask,
    registerUser,
    loginuser
}