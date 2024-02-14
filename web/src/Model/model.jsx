import fs from 'fs'
import React, { useEffect, useState } from "react";
import '../index.css'
import Spinner from '../Spinner/Spinner'
import taskData from './taskdata.json'
import { toast } from 'react-toastify'
import axios from 'axios';
import { ValidateData } from '../Utils/DataValidator'

const Model = (props) => {
    const { closeModel } = props;
    const [spinner, setSpinner] = useState(false)
    const [currtaskData, setCurrData] = useState(props?.data ? props.data : taskData)
    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    useEffect(() => {
        const temp = async () => {

            try {
                if (Object.keys(errors).length === 0 && isSubmit) {
                    setSpinner(true)
                    const res = await axios.post(import.meta.env.VITE_SAVETASK, currtaskData)
                    toast.success('Saved Successfully')
                    setSpinner(false)
                }
            }
            catch (e) {
                toast.error(e.message)
                setSpinner(false)
            }
        }
        temp();
    }, [errors])
    const handleData = (event) => {
        setCurrData({ ...currtaskData, [event.target.name]: event.target.value })
        console.log(JSON.stringify(currtaskData))
    }
    const saveData = (e) => {
        e.preventDefault();
        console.log(currtaskData)
        setErrors(ValidateData(currtaskData));
        setIsSubmit(true)
    }
    return (
        <div className="modelBackground">
            <div className="modelContainer">
                <div className="title">
                    <h2>Task</h2>
                </div>
                <div className="exit-button">
                    <button className={(spinner) ? 'cancel-disabled' : 'cancel'} disabled={spinner} onClick={() => closeModel(false)}>
                        X
                    </button>
                </div>
                <div className="inputs">
                    <label htmlFor="" className="lables">Title</label>
                    <input type="text" value={currtaskData.title} name="title" className="input" id="" onChange={(e) => handleData(e)} />
                    <p className="errorMessage">{errors?.title}</p>
                </div>
                <div className="inputs">
                    <label htmlFor="" className="lables">Description</label>
                    <textarea name="description" id="" cols="40" rows="10" value={currtaskData.description} onChange={e => handleData(e)}></textarea>
                    <p className="errorMessage">{errors?.description}</p>
                </div>
                <div className="operations">
                    <button className={(spinner) ? 'cancel-disabled' : 'cancel'} disabled={spinner} onClick={() => closeModel(false)}>Cancel</button>
                    <button className='save-btn'
                        onClick={(e) => saveData(e)}
                        disabled={spinner || errors == {}}
                    >{(spinner) ? <Spinner /> : 'Save'}</button>
                </div>
            </div>
        </div>
    )
}
export default Model;