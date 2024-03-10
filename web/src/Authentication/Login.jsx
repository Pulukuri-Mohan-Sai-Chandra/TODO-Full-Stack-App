import React, { useState } from "react";
import { loginData } from './authdata'
import { encodePass } from '../Utils/EncodePassword'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {getHeaders} from '../Utils/RequestHeaders'
import Cookies from 'js-cookie'
import '../index.css'
const Login = (props) => {
    const [authdata, setLoginData] = useState(loginData)
    const [login, setLogin] = useState(false)
    const prognavigate = useNavigate();
    const handleChange = (e) => {
        setLoginData({ ...authdata, [e.target.name]: e.target.value })
    }
    const handleClick = async (e) => {
        console.log('Insided the Submit Functions')
        e.preventDefault();
        const outauthdata = {}
        for (const key of Object.keys(authdata)) {
            if (key == 'loginpassword') {
                outauthdata[key] = encodePass(authdata[key]);
            }
            else {
                outauthdata[key] = authdata[key];
            }
        }
        console.log('Out Auth Data is ', outauthdata)
        try {
            const response = await axios.post(import.meta.env.VITE_LOGIN, outauthdata,getHeaders)
            console.log(response)
            console.log()
            if(response.data.message === 'Login Successfull'){ 
                const tid = Cookies.get("TID")
                if(tid != undefined){
                    localStorage.setItem("TID",tid)
                }
            }
            console.log('Response from Server is ', response)
            prognavigate('/')
        }
        catch (e) {
            toast.error(e.message)
        }
    }
    return (
        <div className="login_space">
            <div className="input_group">
                <label className="login-label" htmlFor="">Email</label>
                <input onChange={handleChange} type="email" name="loginmail" id="" />
            </div>
            <div className="input_group">
                <label htmlFor="" className="login-label">Password</label>
                <input onChange={handleChange} type="password" name="loginpassword" id="" />
            </div>
            <div className="button_group">
                <button onClick={handleClick} className="login_btn">
                    Login
                </button>
            </div>
        </div>
    )
}
export default Login;