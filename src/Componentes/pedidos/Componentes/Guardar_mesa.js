import React, { useState } from 'react';
import './Styles/Guardar_mesa.css';


const Guardar_mesa = (props) => {
    const [state, setState] = useState("Elija una mesa");
    const { guardar_mesa } = props;

    function HandleChange(event){
        console.log(event.target.value);
        setState(event.target.value);
    }

    function mandar_mensaje(){
        console.log("state: "+state);
        guardar_mesa(state);
    }

   
    
    return (
        <div className="contenedor_form">
            <form className="formulario_mesa" >
                <span className="label">Elije el numero de tu mesa: </span> 
                <select className="opciones" value={state} onChange={HandleChange}>
                    <option value="elegir una mesa">Elija una mesa</option>
                    <option value="1">Mesa 1</option>
                    <option value="2">Mesa 2</option>
                    <option value="3">Mesa 3</option>
                    <option value="4">Mesa 4</option>
                </select>
            </form>
            <button className="boton_form" onClick={ () => mandar_mensaje()}>Comenzar el pedido</button>
        </div>
    );
}
export default Guardar_mesa;

