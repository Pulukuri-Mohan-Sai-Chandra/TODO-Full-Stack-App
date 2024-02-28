import React, { useState } from "react";
import {loginData} from './authdata'
import '../index.css'
const Login = (props) => {
    const[logindata,setLoginData] = useState(loginData)
    const[login,setLogin] = useState(false)
    const handleChange = (e) =>{
        setLoginData({...logindata,[e.target.name]:e.target.value})
    }
    return (
        <div className="login_space">
            <div className="input_group">
                <label className="login-label" htmlFor="">Email</label>
                <input type="email" name="loginmail" id="" />
            </div>
            <div className="input_group">
                <label htmlFor="" className="login-label">Password</label>
                <input type="password" name="loginpassword" id="" />
            </div>
            <div className="button_group">
                <button className="login_btn">
                    Login
                </button>
            </div>
        </div>
    )
}
export default Login;