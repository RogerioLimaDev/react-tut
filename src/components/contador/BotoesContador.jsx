import React, {useState} from "react";

export default (props)=>{

    let [result, setResult] = useState(0)
    let p = parseInt(props.passo) || 100

    function soma (){
        
        setResult(result + p)
        console.log("O valor de p é: "+p)
        props.onClicar(result)
                
    }

    function subtrai(){
        setResult(result - p)
        console.log("O valor de p é: "+p)
        console.log("O valor de result é: "+result)
        props.onClicar(result)
    }

    return <div>
        <button onClick={e =>soma()}> + </button>
        <button onClick={e =>subtrai()}> - </button>
    </div>
}





