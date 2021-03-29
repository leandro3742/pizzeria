import React, { useState } from 'react';

// import Contactanos from '../Componentes/Contactanos';
import Guardar_mesa from '../Componentes/pedidos/Componentes/Guardar_mesa';
import Listado_completo from '../Componentes/pedidos/Componentes/Listado_completo';
import './Styles/Pedido.css';

let pedido_completo = [];
let i = 0;


const Pedido = () => {
    const [precio_total, setPrecio_total] = useState(0);
    let precio = 0;
    
    function precio_del_pedido(e){
        console.log(e);
        precio = precio + e;
        setPrecio_total(precio);
    }

    function ingredientes_extras(e){
        let array = [];
        array = e;
        if (array.length === 1)
            array.splice(0, 0, '1  ');
        
        else
            array.splice(1, 0, '  con : ');
        
        pedido_completo[i] = array; 
        i++;
        
    }
    let mesa;
    function guardar_mesa(e){
        mesa = e;
        console.log("Mesa numero:" + e);
        setMostrar(<Listado_completo mesa={mesa} />);
    }
    const [mostrar, setMostrar] = useState(<Guardar_mesa guardar_mesa={guardar_mesa} />); //Inicializo a mostrar en guardar_mesa
    return(
        <React.Fragment>
            {mostrar}
        </React.Fragment>

    );
}
export default Pedido;