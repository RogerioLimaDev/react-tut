import React, {useState} from "react";

export default (props) => {

    const num = props.totalDeNumeros;

    function gerarNumerosUnicos(array){

        const novoNumero = parseInt((Math.random() * 60 -1)  + 1)
        return array.includes(novoNumero)? gerarNumerosUnicos(array): novoNumero
    }
  
  
    function sorteio() {
        const novoSorteio = Array(num)
        .fill(0)
        .reduce(a =>[...a, gerarNumerosUnicos(a)], [])
        .sort((a,b)=> a-b)
        setSorteados(novoSorteio)
        console.log("Sorteio: "+novoSorteio);
  }

  const[sorteados, setSorteados] = useState(Array(props.totalDeNumeros).fill(0));
  return (
    <div>
      <h2>Surpresinha da Mega</h2>
      <p>{sorteados.join(" ")}</p>
      <button onClick={sorteio}>Sortear</button>
    </div>
  );
};
