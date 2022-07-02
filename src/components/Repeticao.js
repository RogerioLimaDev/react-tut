
import React from "react";
import produtos from "../data/produtos";

export default (props) => {
 function getProdutosListItens() {
    return produtos.map ((prod) =>{
      return <li key={prod.id}>{prod.id} - {prod.nome} - R${prod.preço}</li>
    })
  }
    
return <div>
  <h1>Produtos</h1>
  <li>{getProdutosListItens()}</li>
  </div>
}
  

    

 














