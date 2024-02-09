import React, { useState } from "react";
import '../index.css'
import Spinner from '../Spinner/Spinner'
import { set } from "mongoose";

const Model = (props) =>{
    const {closeModel} = props;
    const[spinner,setSpinner] = useState(false)
    const saveData = async()=>{
        setSpinner(true)
        await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                alert('data saved')
                resolve('ok')
            },2000)
        })
        setSpinner(false)
        console.log('after Data ')

    }
    return(
        <div className="modelBackground">
            <div className="modelContainer">
                <div className="title">
                    <h2>Task</h2>
                </div>
                <div className="exit-button">
                    <button className={(spinner)?'cancel-disabled':'cancel'} disabled={spinner} onClick={() => closeModel(false)}>
                        X
                    </button>
                </div>
                <div className="inputs">
                    <label htmlFor="" className="lables">Title</label>
                    <input type="text" name="" className="input" id="" />
                </div>
                <div className="inputs">
                    <label htmlFor="" className="lables">Description</label>
                    <textarea name="" id=""  cols="40" rows="10" ></textarea>
                </div>
                <div className="operations">
                    <button className={(spinner)?'cancel-disabled':'cancel'} disabled={spinner} onClick={() => closeModel(false)}>Cancel</button>
                    <button className='save-btn'
                    onClick = {() => saveData()}    
                    disabled={spinner}
                    >{(spinner)?<Spinner/>: 'Save'}</button>
                </div>
            </div>
        </div>
    )
}
export default Model;