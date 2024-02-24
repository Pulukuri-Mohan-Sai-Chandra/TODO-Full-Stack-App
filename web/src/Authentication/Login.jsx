import React from "react";
import '../index.css'

const Login = (props) => {
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