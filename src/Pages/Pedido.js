import React from 'react';
import { Link } from 'react-router-dom'; 
import './Styles/Pedido.css';
import pizza from '../Imagenes/pizza.jpg';
import burger from '../Imagenes/hamburguesa.jpg';
import pasta from '../Imagenes/pasta.jpg';
import postre from '../Imagenes/postre.jpg';
import add from '../Imagenes/iconos/add.png';

let clase_pizza = "pedido-container";
let clase_burger = "pedido-container";
let clase_pasta = "pedido-container";
let clase_postre = "pedido-container";

let sabores_pizza = <div></div>
let sabores_burger = <div></div>
let sabores_pasta = <div></div>
let sabores_postre = <div></div>

let lista_sabores_pizza = <div></div>
let lista_sabores_burger = <div></div>
let lista_sabores_pasta = <div></div>
let lista_sabores_postre = <div></div>

let precio = 0;
let cantidad_de_productos = 0;
let cantidad_de_ingredientes = 0;

let producto = {
    nombre: '',
    ingredientes: []
}

let pedido = [];
    



function agregar_al_precio(valor, nombre){
    // console.log(pedido);
    let ya_esta = false;
    let i = 0;
    while(i < cantidad_de_ingredientes){
        if(producto.ingredientes[i] === nombre ){
            ya_esta = true;
        }
        i++;
    }

    if(ya_esta === false){
        producto.ingredientes[cantidad_de_ingredientes] = nombre;
        cantidad_de_ingredientes++;
        precio = precio + valor;
    }
    console.log(pedido);
}

function quitar_al_precio(valor, nombre){
    let i = 0;
    let pivot;
    while(i < cantidad_de_ingredientes){
        if(producto.ingredientes[i] === nombre ){
            pivot = i;
            producto.ingredientes[i] = '';
            precio = precio - valor;
        }
        i++;
    }
    i = pivot;
    while( i < cantidad_de_ingredientes){
        producto.ingredientes[i] = producto.ingredientes[i+1];
        i++;
    }
    cantidad_de_ingredientes--;
    console.log(pedido);
}


function cerrar_opciones(){
    cantidad_de_productos++; //Avanzo un casillero asi no piso nungun producto

    // Cierro todas las opciones de agregar sabores
    sabores_pizza = <div></div>
    sabores_burger = <div></div>
    sabores_pasta = <div></div>
    sabores_postre = <div></div>
    
    //Cierro la lista de sabores
    lista_sabores_pizza = <div></div>
    lista_sabores_burger = <div></div>
    lista_sabores_pasta = <div></div>
    lista_sabores_postre = <div></div>
    
    //Hago que todas las opciones sean visibles
    clase_pizza = "pedido-container";
    clase_burger = "pedido-container";
    clase_pasta = "pedido-container";
    clase_postre = "pedido-container";
}

function expandir_lista(comida){

    if(comida === "pizza"){
        lista_sabores_pizza = 
            <div className="lista">
                <div className="bacon">
                    <span className="ingredientes">Bacon</span> 
                    <Link to="/pedido"> <img onClick={()=>quitar_al_precio(40, "bacon")} className="icono-ingredientes" src={add} alt=""/> </Link>
                    <Link to="/pedido"> <img onClick={()=>agregar_al_precio(40, "bacon")} className="icono-ingredientes" src={add} alt=""/> </Link>
                </div>

                <div>
                    <span className="ingredientes">Extra queso</span>
                    <Link to="/pedido"> <img onClick={()=>quitar_al_precio(40, "extra_queso")} className="icono-ingredientes" src={add} alt=""/> </Link>
                    <Link to="/pedido"> <img onClick={()=>agregar_al_precio(40, "extra_queso")} className="icono-ingredientes" src={add} alt=""/> </Link>
                </div>
                
                <div>
                    <span onClick={()=>agregar_al_precio(40, "aceitunas")} className="ingredientes">Aceitunas</span>
                    <Link to="/pedido"> <img onClick={()=>quitar_al_precio(40, "aceitunas")} className="icono-ingredientes" src={add} alt=""/> </Link>
                    <Link to="/pedido"> <img onClick={()=>agregar_al_precio(40, "aceitunas")} className="icono-ingredientes" src={add} alt=""/> </Link>
                </div>
                
                <div>
                    <span onClick={()=>agregar_al_precio(40, "huevos")} className="ingredientes">Huevos</span>
                    <Link to="/pedido"> <img onClick={()=>quitar_al_precio(40, "huevos")} className="icono-ingredientes" src={add} alt=""/> </Link>
                    <Link to="/pedido"> <img onClick={()=>agregar_al_precio(40, "huevos")} className="icono-ingredientes" src={add} alt=""/> </Link>
                </div>
                <Link to="/pedido"> <button onClick={()=>cerrar_opciones()}>Seguir comprando</button> </Link>
            </div>
    }
}

function agregar(comida){
    switch (comida) {
        case "pizza":
            sabores_pizza = 
                <div className="sabores">
                    <h1 className="pedido-titulo">Le agregamos algún ingrediente extra?</h1>
                    <div className="elegir">
                        <Link to="pedido"> <span onClick={()=>expandir_lista(comida)} className="si">Si</span> </Link>
                        <Link to="pedido"> <span onClick={()=>cerrar_opciones()} className="no">No</span> </Link>
                    </div>
                </div>
        break;
        
        case "burger":
            sabores_burger = 
                <div className="sabores">
                    <h1 className="pedido-titulo">Le agregamos algún ingrediente extra?</h1>
                    <div className="elegir">
                        <Link to="pedido"> <span onClick={()=>expandir_lista(comida)} className="si">Si</span> </Link>
                        <Link to="pedido"> <span onClick={()=>cerrar_opciones()} className="no">No</span> </Link>
                    </div>
                </div>
        break;
        
        case "pasta":
            sabores_pasta = 
                <div className="sabores">
                    <h1 className="pedido-titulo">Le agregamos algún ingrediente extra?</h1>
                    <div className="elegir">
                        <Link to="pedido"> <span onClick={()=>expandir_lista(comida)} className="si">Si</span> </Link>
                        <Link to="pedido"> <span onClick={()=>cerrar_opciones()} className="no">No</span> </Link>
                    </div>
                </div>
        break;
        
        case "postre":
            sabores_postre = 
                <div className="sabores">
                    <h1 className="pedido-titulo">Le agregamos algún ingrediente extra?</h1>
                    <div className="elegir">
                        <Link to="pedido"> <span onClick={()=>expandir_lista(comida)} className="si">Si</span> </Link>
                        <Link to="pedido"> <span onClick={()=>cerrar_opciones()} className="no">No</span> </Link>
                    </div>
                </div>
        break;
    
        
    }
    if (comida === "pizza"){
        
    }
}

function agregarle_sabores(comida, precio){
    
    producto.nombre = comida; //Agrego al array el producto y lo guardo
    pedido[cantidad_de_productos] = producto;

    agregar_al_precio(precio);
    switch (comida) {
        case "pizza":
            clase_pizza = "pedido-container";
            clase_burger = "pedido-ocultar";
            clase_pasta = "pedido-ocultar";
            clase_postre = "pedido-ocultar";
            agregar(comida);             
        break;
        case "burger":
            clase_pizza = "pedido-ocultar";
            clase_burger = "pedido-container";
            clase_pasta = "pedido-ocultar";
            clase_postre = "pedido-ocultar";
            agregar(comida);            
        break;
        case "pasta":
            clase_pizza = "pedido-ocultar";
            clase_burger = "pedido-ocultar";
            clase_pasta = "pedido-container";
            clase_postre = "pedido-ocultar";
            agregar(comida);            
        break;
        case "postre":
            clase_pizza = "pedido-ocultar";
            clase_burger = "pedido-ocultar";
            clase_pasta = "pedido-ocultar";
            clase_postre = "pedido-container";
            agregar(comida);            
        break;
    }
}


export default class Pedido extends React.Component {
    render(){
        return(
            <div className="pedido">
                <div className={clase_pizza}>
                    <div className="pedido-mini-container">
                        <img className="pedido-imagen" src={pizza} alt=""/>
                        <Link to="pedido"><img onClick={()=>agregarle_sabores("pizza", 250)} className="pedido-icono" src={add} alt=""/></Link>
                    </div>
                    {sabores_pizza}
                    {lista_sabores_pizza}
                </div>                

                <div className={clase_burger}>
                    <div className="pedido-mini-container">
                        <img className="pedido-imagen" src={burger} alt=""/>
                        <Link to="pedido"><img onClick={()=>agregarle_sabores("burger", 200)} className="pedido-icono" src={add} alt=""/></Link>
                    </div>
                    {sabores_burger}
                    {lista_sabores_burger}
                </div>                
                
                <div className={clase_pasta}>
                    <div className="pedido-mini-container">
                        <img className="pedido-imagen" src={pasta} alt=""/>
                        <img className="pedido-icono" src={add} alt=""/>
                    </div>
                    {sabores_pasta}
                    {lista_sabores_pasta}
                </div>                
                
                <div className={clase_postre}>
                    <div className="pedido-mini-container">
                        <img className="pedido-imagen" src={postre} alt=""/>
                        <img className="pedido-icono" src={add} alt=""/>
                    </div>
                    {sabores_postre}
                    {lista_sabores_postre}
                </div>  

                <div className="precio">
                    <h1>Total: ${precio}</h1>
                </div>              
            </div>
        );
    }
}