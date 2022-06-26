import React from "react"
import './App.css'
import Primeiro from "./components/Primeiro";
import ComParametro from "./components/ComParametro";
import ComFilhos from "./components/ComFilhos";

import Card from "./components/layout/Card";

export default (props) => 
  <div className="App">
    <Card titulo="Primeiro exercício">
      <Primeiro />
    </Card>

    <Card titulo="Segundo exercício">
      <Primeiro />
    </Card>

    <Card titulo="Tercerio exercício">
      <Primeiro />
    </Card>

    <Card titulo="Primeiro componente">
      <Primeiro />
    </Card>
  </div>

