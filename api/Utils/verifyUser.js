const jwt = require('jsonwebtoken')
require('dotenv').config()

const validateUser = async (req, res, next) => {
    console.log("Inside the Validate User Methods")
    let response = {}
    let message = ""
    const token = req.cookies?.TID;
    if (token == undefined || token == null) {
        response = { message: "No Token" }
        res.status(403).json(response)
    }
    else {
        try {
            const verif = jwt.verify(token, process.env.PASSWORD_SECRET)
            req.user = verif
            next()
        }
        catch (e) {
            response = { message: e.message }
            res.status(200).json(response)
        }
    }
}

const verifyRoutine = async (req, res) => {
    console.log("Inside the Verify Routine is ")
    let response = {}
    const token = req.cookies?.TID;
    if (token == undefined || token == null) {
        response = { message: "No Token" }
        res.status(403).json(response)
    }
    else {
        try {
            if (jwt.verify(token, process.env.PASSWORD_SECRET)) {
                response = { message: "Verfication Successfull" }
                res.status(200).json(response)
            }
            else {
                response = { message: "Verfication Failed Access Denied" }
                res.status(200).json(response);
            }
        }
        catch (e) {
            response = { message: e.message }
            res.status(200).json(response)
        }
    }
}

module.exports = {
    validateUser,
    verifyRoutine
}