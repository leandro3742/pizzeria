import React, { useState } from 'react';
import './Styles/Comida.css';

import add from '../../../Imagenes/iconos/add.png';
import carro from '../../../Imagenes/iconos/carro.png';

import less from '../../../Imagenes/iconos/less.png';

let ingredientes_guardados = [];
let precio_total = 0;

export default class Comida extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            nombre_del_producto : props.nombre_del_producto,
            imagen : props.foto,
            precio_inicial : props.precio,
            precio : props.precio,
            ingredientes : props.ingredientes,
            mostrar_precio : <div></div>,
            i : 0,
            ingredientes_elegido : [],
            mostrar_boton : 'no_mostrar',
            preguntar_por_ingredientes_extra : <div></div>
        }
    } 

    mostrar_pedido = ()=> {        
        if(this.state.ingredientes !== false){
            this.setState({
                preguntar_por_ingredientes_extra :
                    <div className="preguntar_por_ingredientes_extras">
                        <span className="agregar_ingrediente">Le agregamos algún ingrediente extra?</span>
                        <div className="elegir_si_no">
                            <h2 onClick={()=>this.expandir_ingredientes()} className="si">Si</h2> 
                            <h2 onClick={()=>this.cerrar_lista()}className="no">No</h2>
                        </div>
                    </div>
            })
            this.state.mostrar_boton = "si_mostrar";
        }
        else{
            this.setState({
                mostrar_boton : "si_mostrar"
            })
        }
    
    }

    cerrar_lista = () => {
        this.setState({
            preguntar_por_ingredientes_extra : <div></div>
        })
    }

    expandir_ingredientes = () => {
        this.cerrar_lista(); //Cierro la pregunta de "Agregarle ingredientes extras"
        // this.aparecer_boton(); //Aparece el boton para poder seguir comprando

        this.setState({
            lista_ingredientes :
                <div>   
                    {this.state.ingredientes.nombres.map(lista_ingredientes =>
                    <div className="lista_ingredientes">
                        <span> {lista_ingredientes} </span>
                        <img className="icono_chico" src={less} onClick={() => this.quitar_a_la_lista(lista_ingredientes, this.state.ingredientes.precio)}/>
                        <img className="icono_chico" src={add} onClick={() => this.agregar_a_la_lista_de_ingredientes(lista_ingredientes, this.state.ingredientes.precio)}/>
                    </div>)}
                
                </div>    
        })
    }


    quitar_a_la_lista(ingrediente, precio){
        let auxiliar = this.state.ingredientes_elegido;
        let i = auxiliar.indexOf(ingrediente);

        if(i != -1){

           //Busca en los ingredientes el precio correcto
           let numero_ingrediente = 0;
           while(ingrediente != this.state.ingredientes.nombres[numero_ingrediente]){
                numero_ingrediente++;
            }

            auxiliar.splice(i, 1); //Elimina el ingrediente
            this.setState({
                ingredientes_elegido : auxiliar,
                precio : this.state.precio - precio[numero_ingrediente]
            })
        }
    }

    agregar_a_la_lista_de_ingredientes(ingrediente, precio) {
        let numero_ingrediente = 0; 
        let i = 0;
        let ya_esta = false; //No permite que hayan ingredientes elegidos

        //Busca en los ingredientes el precio correcto
        while(ingrediente != this.state.ingredientes.nombres[numero_ingrediente]){
            numero_ingrediente++;
        }
        
        while(i < this.state.i ){
            if(ingrediente === this.state.ingredientes_elegido[i])
                ya_esta = true;
            i++;
        }

        if(ya_esta === false){
            this.state.ingredientes_elegido.length++;
            this.state.ingredientes_elegido[this.state.i] = ingrediente ;
        
            this.setState({
                i : this.state.i + 1,
                precio : this.state.precio + precio[numero_ingrediente]
            })
        }
    }

    cerrar_ingredientes = () => {
        this.state.ingredientes_elegido.unshift(this.state.nombre_del_producto); //Agrego el nombre del producto al principio
        ingredientes_guardados = this.state.ingredientes_elegido;
        precio_total = this.state.precio;
        this.setState({
            mostrar_boton : 'no_mostrar',
            lista_ingredientes : <div></div>,
            ingredientes_elegido : [],
            precio : this.state.precio_inicial
        }) 
    }

    render(){
        
        const { precio_del_pedido } = this.props;
        const { ingredientes_extras } = this.props

        return(
            <div className="pedido">
                <div>
                    <div className="pedido-mini-container">
                        <div className="arriba">
                            <img className="pedido-imagen" src={this.state.imagen} onClick={()=>this.mostrar_pedido()} alt=""/>
                            <img className="icono" src={carro} onClick={()=>this.mostrar_pedido()} alt=""/>
                        </div>
                        <div className="precio"> <span>${this.state.precio}</span> </div>
                    </div>
                    {this.state.preguntar_por_ingredientes_extra}

                    {this.state.lista_ingredientes}
                    
                    {/* ACA HACE UNA LISTA CON LOS INGREDIENTES EXTRA QUE ELIJE */}
                    <div className="container_ingredientes">
                        {this.state.ingredientes_elegido.map(ingredientes_elegidos =>
                            <div className="ingredientes_elegidos">
                                <span>{ingredientes_elegidos}</span>
                            </div>
                        )}
                    </div>
                    {/* FIN DE LOS INGREDIENTES EXTRA */}

                    <div className="boton">
                        <button className={this.state.mostrar_boton} onClick={ () => (this.cerrar_ingredientes(), ingredientes_extras(ingredientes_guardados), precio_del_pedido(precio_total) ) }>Seguir comprando</button>
                    </div>

                </div>              
                
            </div>
        );
    }
}