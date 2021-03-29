import React, { useState } from 'react';

import flecha_abajo from "../../../Imagenes/iconos/flecha_abajo.png";
import { pizza, burger, brownie, pepsi_chica,mirinda_grande, paso_de_los_toros_grande } from '../../../Pages/datos';
import COMIDA from './Comida';
import BEBIDA from './Bebida';
import POSTRE from './Postre';
import Contactanos from './Contactanos';
import '../../../Pages/Styles/Pedido.css';

let pedido_completo = [];
let i = 0;
let PEDIDO = '';

const Listado_completo = (props) => {
    const [precio_total, setPrecio_total] = useState(0);
    let precio = 0;
    
    function precio_del_pedido(e){
        console.log(e);
        precio = precio + e;
        setPrecio_total(precio);
    }
    function ingredientes_extras(e){
        let array = [];
        let f = 0;
        let esta = '';
        array = e;
        if (array.length === 1)
            array.splice(0, 0, ' 1 ');
        
        else
            array.splice(1, 0, ' con: ');

        while(f < array.length){
            if(array[f] !== undefined)
                PEDIDO = PEDIDO + array[f];
            f++;
        }
        PEDIDO = PEDIDO + ' // ';
        pedido_completo[i] = array; 
        i++;
    }
    
    const bebidas =
        <div>
            <BEBIDA ingredientes_extras={ingredientes_extras} precio_del_pedido={precio_del_pedido} nombre_del_producto = {"Pepsi 600ml"} foto={pepsi_chica.img} precio={pepsi_chica.precio} ingredientes={pepsi_chica.ingredientes} />
            <BEBIDA ingredientes_extras={ingredientes_extras} precio_del_pedido={precio_del_pedido} nombre_del_producto={"Mirinda 1.2L"} foto={mirinda_grande.img} precio={mirinda_grande.precio} ingredientes={mirinda_grande.ingredientes} />
            <BEBIDA ingredientes_extras={ingredientes_extras} precio_del_pedido={precio_del_pedido} nombre_del_producto={"Paso 1.2L"} foto={paso_de_los_toros_grande.img} precio={paso_de_los_toros_grande.precio} ingredientes={paso_de_los_toros_grande.ingredientes} />

        </div>
    
    const platos =
        <div>
            <COMIDA ingredientes_extras={ingredientes_extras} precio_del_pedido={precio_del_pedido} nombre_del_producto = {"Pizza"} foto={pizza.img} precio={pizza.precio} ingredientes={pizza.ingredientes} />
            <COMIDA ingredientes_extras={ingredientes_extras} precio_del_pedido={precio_del_pedido} nombre_del_producto={"Burger"} foto={burger.img} precio={burger.precio} ingredientes={burger.ingredientes} />
        </div>;

    const postres = 
        <div>
            <POSTRE ingredientes_extras={ingredientes_extras} precio_del_pedido={precio_del_pedido} nombre_del_producto={"Brownie"} foto={brownie.img} precio={brownie.precio} ingredientes={brownie.ingredientes} />
            <POSTRE ingredientes_extras={ingredientes_extras} precio_del_pedido={precio_del_pedido} nombre_del_producto={"Brownie"} foto={brownie.img} precio={brownie.precio} ingredientes={brownie.ingredientes} />
            <POSTRE ingredientes_extras={ingredientes_extras} precio_del_pedido={precio_del_pedido} nombre_del_producto={"Brownie"} foto={brownie.img} precio={brownie.precio} ingredientes={brownie.ingredientes} />
        </div>


    const [bebida, setBebida] = useState(true);
    const [mostrar_bebida, setMostrar_bebida] = useState(bebidas);    
    const [flecha_bebida, setFlecha_bebida] = useState(<span className="flechas">➘ ➘ ➘</span>)

    const [comida, setComida] = useState(true);
    const [mostrar_comida, setMostrar_comida] = useState(platos);
    const [flecha_comida, setFlecha_comida] = useState(<span className="flechas">➘ ➘ ➘</span>)

    const [postre, setPostre] = useState(true);
    const [mostrar_postre, setMostrar_postre] = useState(postres);
    const [flecha_postre, setFlecha_postre] = useState(<span className="flechas">➘ ➘ ➘</span>)



    function mostrar(que_mostrar){
        setBebida(!bebida);
        switch (que_mostrar) {
            case 'bebida':
                setBebida(!bebida);
                if(bebida === true){
                    setMostrar_bebida(<div></div>);
                    setFlecha_bebida(<span className="flechas" >➙ ➙ ➙</span>);
                }
                else{
                    setMostrar_bebida(bebidas);
                    setFlecha_bebida(<span className="flechas" > ➘ ➘ ➘</span>);
                }
            break;
        
            case 'comida':
                setComida(!comida);
                if(comida === true){
                    setMostrar_comida(<div></div>);
                    setFlecha_comida(<span className="flechas" >➙ ➙ ➙</span>);
                }
                else{
                    setMostrar_comida(platos);
                    setFlecha_comida(<span className="flechas" >➘ ➘ ➘</span>);
                }
            break;

            case 'postre':
                setPostre(!postre);
                if(postre === true){
                    setMostrar_postre(<div></div>);
                    setFlecha_postre(<span className="flechas" >➙ ➙ ➙</span>);
                }
                else{
                    setMostrar_postre(postres);
                    setFlecha_postre(<span className="flechas" >➘ ➘ ➘</span>);
                }
            break;
        }
    };

    const mesa = props.mesa; //Guardo la mesa que tiene el padre
    
    return(
        <React.Fragment>   
        <div className='mostrar_pedido'>

            <a href="/pedido" > <button className="boton_nuevo_inicio">Iniciar pedido desde O</button> </a>
            
            <div className="titulos-con-flechas" onClick={()=>mostrar('bebida')} >
                <h4 className="titulos_pedido" >Bebidas </h4> 
                {flecha_bebida}
            </div>
            <div className="bebidas">
                {mostrar_bebida}            
            </div>
        

            <div className="titulos-con-flechas" onClick={()=>mostrar('comida')} >
                <h4 className="titulos_pedido">Platos principales</h4>
                {flecha_comida}
            </div>
            <div className="platos">
                {mostrar_comida}
            </div>

            <div className="titulos-con-flechas" onClick={()=>mostrar('postre')} >
                <h4 className="titulos_pedido">Postres</h4>
                {flecha_postre}
            </div>
            <div className="prostres">
                {mostrar_postre}
            </div>

            <div id="listar_pedido">
                {pedido_completo.map(ingredientes_elegidos =>
                    <div className="ingredientes_elegidos">
                        <li className="lista_pedido">{ingredientes_elegidos}</li> 
                    </div>
                )}
            </div>
            
            <a href="/pedido#listar_pedido" className="container-flecha_abajo">
                <img  className="flecha_abajo" src={flecha_abajo} alt="" />
            </a>
            {/* pedido_completo */}
            <Contactanos id="boton_enviar" mesa={mesa} precio={precio_total} ingredientes={PEDIDO} />
            <div className="contenedor-total"> <span className="total">Total: ${precio_total}</span> </div>

        </div>
        </React.Fragment>

    );
}
export default Listado_completo;