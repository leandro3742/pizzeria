import React, { useState } from 'react';
import './Styles/Comida.css';
import './Styles/Bebida.css';

import add from '../../../Imagenes/iconos/add.png';
import carro from '../../../Imagenes/iconos/carro.png';

import less from '../../../Imagenes/iconos/less.png';

let ingredientes_guardados = [];
let precio_total = 0;

const Bebida = (props) => {
    const nombre_del_producto = props.nombre_del_producto;
    const imagen = props.foto;
    const precio =props.precio;
    const [lista_ingredientes_comprados, setLista_ingredientes_comprados] = useState([]);

    let ingredientes_elegidos = lista_ingredientes_comprados;

    function cerrar_ingredientes(){
        ingredientes_elegidos.unshift(nombre_del_producto); //Agrego el nombre del producto al principio
        precio_del_pedido(precio);
        ingredientes_extras(ingredientes_elegidos);
        setLista_ingredientes_comprados([]);
    }

    const { precio_del_pedido } = props;
    const { ingredientes_extras } = props;

    return(
        <div className="contenedor-bebida">
            <div className="imagen-precio">
                <img className="pedido-imagen-bebidas" src={imagen} onClick={()=>cerrar_ingredientes()} alt=""/>
                <div className="precio-bebida"> <span>${precio}</span> </div>
            </div>
            <img className="icono" src={carro} onClick={()=>cerrar_ingredientes()}/>
        </div>                
    )

}
export default Bebida;
