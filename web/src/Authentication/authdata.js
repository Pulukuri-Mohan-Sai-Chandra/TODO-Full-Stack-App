export const loginData = () => {

    const data = {
        loginmail: "",
        loginpassword: ""
    }
    return data
}

export const registerData = () => {
    const data = {
        name: "",
        email: "",
        password: "",
        cnfpassword: ""
    }
    return data;
}

export const saveOverData = (regForm) => {
    const data = {
        name: "",
        email: "",
        password: "",
    }

    for (const key in regForm) {
        data[key] = regForm[data];
    }
    return data;
}