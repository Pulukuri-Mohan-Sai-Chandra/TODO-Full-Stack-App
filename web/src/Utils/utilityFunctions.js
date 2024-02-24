export const isEmpty = (value) => {
    return value === ''
}

const checkPassword = (password) => {
    return password.length >= 8 && password.length <= 12
}
const passwordsMatch = (pass, cnfpass) => {
    return pass === cnfpass
}
const checkEmail = (email) => {
    const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    return regex.test(email)
}
export const utilObj = {
    password: checkPassword,
    email: checkEmail
}