import React from "react"
import './App.css'
import Primeiro from "./components/basicos/Primeiro";
import Param from "./components/basicos/Param";
import Filhos from "./components/basicos/Filhos";
import Card from "./components/layout/Card";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import MeuTeste from "./components/basicos/MeuTeste";
import Pai from "./components//comunicacao/direta/Pai";
import Father from "./components/comunicacao/indireta/Father";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
import Mega from './components/Mega/Mega'



export default (props) => 
  <div className="App">
    <h1>Aprendendo React</h1>
    <div className="Cards">
      <Card titulo="Megasena" color="#db4437">
        <Mega totalDeNumeros = {6}/>
      </Card>
      <Card titulo="Contador" color="#db4437">
        <Contador valor = {0} passo = {10}/>
      </Card>
      <Card titulo="Form" color="#db4437">
        <Input/>
      </Card>

      <Card titulo="Comunicação indireta" color="#4285f4">
        <Father/>
      </Card>

      <Card titulo="Comunicação direta" color="#4285f4">
        <Pai sobrenome="Catatau"/>
      </Card>

      <Card titulo="Meu teste" color="#4285f4">
        <MeuTeste texto="Entendi o mínimo"/>
      </Card>

      <Card titulo="Primeiro exercício" color="#db4437">
        <Primeiro />
      </Card>

      <Card titulo="Segundo exercício" color="#f4b400">
        <Param/>
      </Card>

      <Card titulo="Terceiro exercício" color="#0f9d58">
        <Filhos/>
      </Card>

      <Card titulo="Quarto exercício" color="#4285f4">
        <Repeticao/>
      </Card>

      <Card titulo="Quinto exercício" color="#db4437">
        <Condicional número = {124567}/>
      </Card>
      </div>
  </div>

  

