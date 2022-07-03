import React, {useState} from "react";
import Son from "./Son";

export default (props) => {

    const[num, setNum] = useState(0)
    function quandoClicar(valorRecebido){
        setNum(valorRecebido)
    }

    return <div>
            <h4>Valor: {num}</h4>
            <Son onClicar={quandoClicar}></Son>
        </div>    

}

 
