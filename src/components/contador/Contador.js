import React, { Component } from "react";
import Display from "./Display";
import PassoForm from "./PassoForm";
import BotoesContador from "./BotoesContador";


export default class Contador extends Component{

    state = {
                passo: this.props.passo,
                valor: this.props.valor
            }

    // soma = ()=>{
    //     this.setState({valor: this.state.valor +this.state.passo})
                  
    // }
    
    // subtrai= ()=>{
    //     this.setState({valor: this.state.valor -this.state.passo})
    // }

    mudarValor = (novoValor)=>{
        this.setState({valor: novoValor})
        console.log('O valor atual é: '+ this.state.valor)
    }

    mudarPasso = (novoPasso)=>{
        this.setState( {passo: novoPasso}
        )
        console.log('o passo é:' + this.state.passo)
    }

    click  = (valorAtualizado)=>{
        this.mudarValor(valorAtualizado)
    }

    render(){
        return <div>
            <h2>Contador</h2>

            <PassoForm passo={this.state.passo}
                        onPassoChange = {this.mudarPasso}/>
            <Display valor={this.state.valor}/>
            <BotoesContador passo = {this.state.passo} onClicar = {this.click}></BotoesContador>

            {/* <label for="passoInput">Passo:</label>
            <input id= "passoInput" type="number" style={{fontSize:'1.4rem', width: '50px'}}onChange={e => this.setState({passo: +e.target.value})}></input>
            <h4>Valor:{this.state.valor}</h4> */}

            {/* <div>
                <button onClick={this.soma}> + </button>
                <button onClick={this.subtrai}> - </button>
            </div> */}
        </div>
    }
}