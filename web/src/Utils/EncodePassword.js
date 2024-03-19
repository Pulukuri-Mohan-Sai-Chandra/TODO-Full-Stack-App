import CryptoJS from 'crypto-js'

export const encodePass = (password) => {
    const encpassword = CryptoJS.AES.encrypt(password, import.meta.env.VITE_PASSHASH).toString()
    return encpassword
}