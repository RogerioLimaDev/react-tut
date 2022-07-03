import React from "react";

export default (props)=>{

    function clicado (){
        props.onClicar(Math.random())
    }

    return <div>
            <button onClick = {clicado} >Alterar</button>
            </div>
    } 
