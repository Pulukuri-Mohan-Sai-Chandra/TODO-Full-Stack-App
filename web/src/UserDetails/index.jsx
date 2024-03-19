import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import '../index.css'
import { redirect } from "next/dist/server/api-utils";
import Cookies from 'js-cookie'


const UserDetails = (props) => {
    const [show, setShow] = useState(false)
    const handleClick = (e) => {
        setShow(!show)
    }
    return (
        <div className="userDetails">
            <span onClick={e => handleClick(e)}> User</span>
            {show ? <Details setShow={setShow} /> : <></>}
        </div>
    )
}
const Details = (props) => {
    const setShow = props.setShow
    const navigate = useNavigate();
    const logOut = (e) => {
        localStorage.removeItem("TID")
        Cookies.remove("TID")
        navigate('/auth')
    }
    return (
        <div className="logOut">
            <button onClick={(e) => { logOut(e) }}>LogOut</button>
        </div>
    )

}
export default UserDetails;