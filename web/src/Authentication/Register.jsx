import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import '../index.css'
import { registerData } from './authdata'
import { ValidateRegister } from '../Utils/DataValidator'
import axios from 'axios'
import { toast } from 'react-toastify'
import Spinner from '../Spinner/Spinner'
const Register = (props) => {
    const navigate = useNavigate();
    const [regform, setRegform] = useState(registerData)
    const [cnfpassv, setCnfpassv] = useState("")
    const [formErrors, setFormErrors] = useState({})
    const [register, setRegister] = useState(false)
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setRegform({ ...regform, [e.target.name]: e.target.value })
    }
    const handleRegister = () => {
        setRegister(true)
        setFormErrors(ValidateRegister(regform))

    }
    useEffect(() => {

        const register = async () => {
            try {
                setLoading(true);
                const res = await axios.post(import.meta.env.VITE_REGISTER, regform)
                console.log(res)
                toast.success(res.data?.message)
                setLoading(false);
            }
            catch (e) {
                toast.error(e.message)
                setLoading(false);
            }
        }
        if (Object.keys(formErrors).length === 0 && register && cnfpassv === 'Passwords matched') {
            console.log('Access Granted for Registration')
            register();
        }


    }, [formErrors])
    useEffect(() => {
        let message = ""
        if (regform.password.length > 0 && regform.cnfpassword.length > 0 && regform.password === regform.cnfpassword) {
            message = "Passwords matched"
        }
        else if (regform.password.length > 0 && regform.cnfpassword.length > 0 && regform.password != regform.cnfpassword) {
            message = "Passwords not matched"
        }
        else {
            message = ""
        }
        setCnfpassv(message)
    }, [regform.cnfpassword])
    return (
        <div className="register_space">
            <div className="input_group">
                <label htmlFor="" className="login-label" >Name</label>
                <input type="text" name="name" id="" onChange={(e) => handleChange(e)} value={regform.name} />
                <div className="message">
                    {formErrors?.name}
                </div>
            </div>
            <div className="input_group">
                <label htmlFor="" className="login-label">Email</label>
                <input type="email" name="email" id="" onChange={(e) => handleChange(e)} value={regform.email} />
                <div className="message">{formErrors?.email}</div>
            </div>
            <div className="input_group">
                <label htmlFor="" className="login-label" >Password</label>
                <input type="password" onChange={(e) => handleChange(e)} name="password" id="" value={regform.password} />
                <div className="message">{formErrors?.password}</div>
            </div>
            <div className="input_group">
                <label htmlFor="" className="login-label">Confirm Password</label>
                <input type="password" disabled={regform.password === ''} onChange={(e) => handleChange(e)} name="cnfpassword" id="" value={(regform.password === "") ? "" : regform.cnfpassword} />
                <div className={(regform.password === regform.cnfpassword) ? 'message-green' : "message"}>{cnfpassv}</div>
            </div>
            <div className="button_group">
                <button className="login_btn" onClick={handleRegister}>{(loading) ? <Spinner /> : "Register"}</button>
            </div>
        </div>
    )
}

export default Register;