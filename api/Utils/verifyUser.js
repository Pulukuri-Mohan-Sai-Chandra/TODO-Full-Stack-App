const jwt = require('jsonwebtoken')


const validateUser = async (req, res, next) => {
    let response = {}
    let message = ""
    const token = req.cookie?.TID;
    if (token == undefined || token == null) {
        response= {message : "No Token"}
        res.status(403).json(response)
    }
    else {

        try {
            if (jwt.verify(token)) {
                next(req, res)
            }
            else {
                response  = {message: "Verfication Failed Access Denied"}
                res.status(200).json(response);
            }
        }
        catch (e) {
            response = {message : "Something Went Wrong"}
            res.status(200).json(response)
        }
    }
}


module.exports = {
    validateUser
}