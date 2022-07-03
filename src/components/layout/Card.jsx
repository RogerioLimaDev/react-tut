import React from "react";
import Card from "./Card.css";

const card = (props) => (
  <div className="Card" style={{borderColor:props.color || '#00000'}}>
    <div className="Conteudo">{props.children}</div>
    <div className="Footer" style={{backgroundColor:props.color || '#0000'}}><h3>{props.titulo}</h3></div>
  </div>
);

export default card
