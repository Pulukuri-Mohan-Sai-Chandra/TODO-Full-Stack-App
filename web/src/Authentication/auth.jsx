import React from "react";
import { useState } from "react";
import '../index.css'
import Login from "./Login";
import Register from "./Register";

const Auth = (props) => {

    const [pos, setPos] = useState(true)
    return (

        <div className="auth-background">
            <div className="title">
                <h1 className='heading'>TO-DO App</h1>
            </div>
            <div className="auth">
                <div className="auth_navbar">
                    <span className={(pos) ? "auth-nav-btn-active" : "auth-nav-btn"} onClick={() => setPos(true)} >Login</span>
                    <span className={(pos) ? "auth-nav-btn" : "auth-nav-btn-active"}
                        onClick={() => setPos(false)}
                    >Register</span>
                </div>
                {
                    (pos) ? <Login /> : <Register />
                }
            </div>
        </div>
    )
}

export default Auth;