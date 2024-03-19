import taskdata from '../Model/taskdata.json'
import errorMessages from '../Contants.json'
import { isEmpty, utilObj } from '../Utils/utilityFunctions'
export const ValidateData = (data = {}) => {

    console.log("DATA", data)
    let errors = {};
    if (Object.keys(data).length == 0) {
        errors.title = "Title Should Not Be Empty"
        errors.description = "Description Should Not Be Empty"
        return errors;
    }
    else {
        for (const key in taskdata) {
            if (!data.hasOwnProperty(key) || isEmpty(data[key])) {
                if (!errorMessages.hasOwnProperty(key)) continue
                errors[key] = errorMessages[key]
            }
        }
    }
    console.log("Log in Validator Function ", errors)
    return errors;
}

export const ValidateRegister = (data = {}) => {
    console.log(`Data comming for Validation is ${JSON.stringify(data)}`)
    let errors = {}
    for (const key in data) {
        if (data.hasOwnProperty(key) && data[key] != "") {
            if (utilObj.hasOwnProperty(key)) {
                if (!utilObj[key](data[key])) {
                    errors[key] = errorMessages[key]
                }
            }
        }
        else {
            errors[key] = `${key} should not be empty`
        }
    }

    return errors;
}
export const ValidateLogin = (data = {}) => {

}