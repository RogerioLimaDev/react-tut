import React from "react";
import Filho from "./Filho";


export default (props)=>
<div>
    <Filho sobrenome = "Lima">Rogério</Filho>
    <Filho sobrenome = "Gama">Ana Karine</Filho>
    <Filho sobrenome = "Mello">Ignez</Filho>
    <Filho {...props}>Catatildo</Filho>
    <Filho sobrenome={props.sobrenome}>Zé Colmeia</Filho>
</div>