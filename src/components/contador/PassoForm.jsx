import React, {ReactDOM} from "react";
import './contador.css'

export default (props)=>
<div>
    <label for="passoForm">Passo:</label>
    <input className="passoForm" 
            id="passoForm" 
            type="number" 
            value = {props.valor}
            onChange = {e=>{props.onPassoChange(e.target.value)}}            
    >
    </input>
</div>
   