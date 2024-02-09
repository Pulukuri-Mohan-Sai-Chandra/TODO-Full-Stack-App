import React from "react";
import './spineer.css'

const Spinner = (props) =>{
    const {color} = props
    return(
        <div className={(color === 'red')?'spinner-red':'spinner-green'}>
            
        </div>
    )
}
export default Spinner