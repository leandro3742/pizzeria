import React from 'react';
import { Link } from 'react-router-dom'; 
import './Styles/Menu.css';
import left from '../Imagenes/iconos/left.png';
import right from '../Imagenes/iconos/right.png';

import { pizza, burger } from './datos';

let carta1=
<div className="carta">
    <span className="menu-titulo">Comida</span>
    <span className="menu-texto">Pizza con muzza ... ... ${pizza.precio}</span>
    <span className="menu-texto">Chivito para dos ... ... $470</span>
    <span className="menu-texto">Chivito con fritas ... ... $250</span>
    <span className="menu-texto">Hamburguesa casera ... ... $250</span>
    <span className="menu-texto">Milanesa napolitana ... ... $250</span>
    <span className="menu-texto">Chivito napolitana para dos ... $470</span>
</div>

let carta2=
<div className="carta">
    <span className="menu-titulo">Bebida</span>
    <span className="menu-texto">Chivito con fritas ... ... $250</span>
    <span className="menu-texto">Chivito para dos ... ... $470</span>
    <span className="menu-texto">Chivito con fritas ... ... $250</span>
    <span className="menu-texto">Hamburguesa casera ... ... $250</span>
    <span className="menu-texto">Milanesa napolitana ... ... $250</span>
    <span className="menu-texto">Chivito napolitana para dos ... $470</span>
</div>

let carta3=
<div className="carta">
    <span className="menu-titulo">Postres</span>
    <span className="menu-texto">Chivito con fritas ... ... $250</span>
    <span className="menu-texto">Chivito para dos ... ... $470</span>
    <span className="menu-texto">Chivito con fritas ... ... $250</span>
    <span className="menu-texto">Hamburguesa casera ... ... $250</span>
    <span className="menu-texto">Milanesa napolitana ... ... $250</span>
    <span className="menu-texto">Chivito napolitana para dos ... $470</span>
</div>
let carta = carta1;

function atras(){
    if (carta === carta1)
        carta = carta3;
    else if(carta === carta2)
        carta = carta1;
    else if(carta === carta3)
        carta=carta2;
}

function siguiente(){
    if (carta === carta1)
        carta = carta2;
    else if(carta === carta2)
        carta = carta3;
    else if(carta === carta3)
        carta=carta1;
}

export default class Menu extends React.Component {
    render(){
        return(
            <div className="menu">
                <Link to="/menu"><img onClick={()=>atras()} className="left" src={left} alt=""/></Link>
                {carta}
                <Link to="/menu"><img onClick={()=>siguiente()} className="right" src={right} alt=""/></Link>
            </div>
        );
    }
}