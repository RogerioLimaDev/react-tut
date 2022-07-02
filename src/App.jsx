import React from "react"
import './App.css'
import Primeiro from "./components/Primeiro";
import Param from "./components/Param";
import Filhos from "./components/Filhos";
import Card from "./components/layout/Card";
import Repeticao from "./components/Repeticao";
import Condicional from "./components/Condicional";

export default (props) => 
  <div className="App">
    <Card titulo="Primeiro exercício">
      <Primeiro />
    </Card>

    <Card titulo="Segundo exercício">
      <Param/>
    </Card>

    <Card titulo="Terceiro exercício">
      <Filhos/>
    </Card>

    <Card titulo="Quarto exercício">
      <Repeticao/>
    </Card>

    <Card titulo="Quinto exercício">
      <Condicional número = {124567}/>
    </Card>
  </div>

