const CryptoJS = require('crypto-js')
require('dotenv').config();

const decodePassword = (password) => {
    const secret = process.env.PASSWORD_SECRET
    console.log(secret, "Secret is ")
    const decpassword = CryptoJS.AES.decrypt(password, secret)
    console.log('Password is ', decpassword.toString(CryptoJS.enc.Utf8))
    return decpassword.toString(CryptoJS.enc.Utf8)
}

module.exports = {
    decodePassword
}