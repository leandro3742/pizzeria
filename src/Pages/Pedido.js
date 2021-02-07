import React from 'react';
import { Link } from 'react-router-dom'; 
import './Styles/Pedido.css';
import Swal from 'sweetalert2';

import { pizza, burger } from './datos';
import add from '../Imagenes/iconos/add.png';

class NUEVO_PRODUCTO{
    constructor(clase, sabores, lista_sabores, frase, lista_de_compras){
        this.clase = clase;
        this.sabores = sabores;
        this.lista_sabores = lista_sabores;
        this.frase = frase;
        this.lista_de_compras = lista_de_compras
    }
}

const PIZZA = new NUEVO_PRODUCTO("pedido-container", <div></div>, <div></div>, <div></div>, <div></div>);
const BURGER = new NUEVO_PRODUCTO("pedido-container", <div></div>, <div></div>, <div></div>, <div></div>);

let precio = 0;
let cantidad_de_productos = 0;
let cantidad_de_ingredientes = 0;

let cerrar_todo = <div></div>


let producto = {
    nombre: '',
    ingredientes: [],
}

let pedido = [];
let pedido_con_ingredientes = [];

function agregar_al_precio(nombre, arreglo){
    let ya_esta = false;
    let i = 0;
    let especifico_producto;

    while(i < cantidad_de_ingredientes){
        if(producto.ingredientes[i] === nombre ){
            ya_esta = true;
        }
        i++;
    }
    i = 0;
    if(ya_esta === false){

        switch (arreglo.nombre) {
            case 'pizza':
                PIZZA.frase = <h2 className="frase">La pizza va con: </h2>    
                especifico_producto = PIZZA;
                break;
            case 'burger':
                BURGER.frase = <h2 className="frase">La burger va con: </h2>    
                especifico_producto = BURGER;
                break;
                
        }
        while(nombre != arreglo.ingredientes.nombres[i])
            i++;
        producto.ingredientes[cantidad_de_ingredientes] = nombre;
        cantidad_de_ingredientes++;
        precio = precio + arreglo.ingredientes.precio[i];
        
        especifico_producto.lista_de_compras = producto.ingredientes.map(nombre =>
            <li className="lista_de_compras">{nombre}</li>
        )
    }
}

function quitar_al_precio(nombre, arreglo){
    let i = producto.ingredientes.indexOf(nombre);
    if (i != -1){
        producto.ingredientes.splice(i, 1);
        while( (nombre != arreglo.ingredientes.nombres[i])  )
            i++;
        precio = precio - arreglo.ingredientes.precio[i];
        cantidad_de_ingredientes--;
    }
}

function cerrar_opciones(){
    cantidad_de_productos++; //Avanzo un casillero asi no piso nungun producto
    // Cierro todas las opciones de agregar sabores
    PIZZA.sabores = <div></div>
    BURGER.sabores = <div></div>

    //Cierro la lista de sabores
    PIZZA.lista_sabores = <div></div>
    BURGER.lista_sabores = <div></div>

    //Hago que todas las opciones sean visibles
    PIZZA.clase = "pedido-container";
    BURGER.clase = "pedido-container";

    cerrar_todo = <div></div>

    pedido[cantidad_de_productos] = producto.nombre;
    pedido_con_ingredientes[cantidad_de_productos] = producto.ingredientes;
   
    producto.nombre = '';
    producto.ingredientes = [];

}

function expandir_lista(comida){
    switch (comida) {
        case "pizza":
            PIZZA.lista_sabores = pizza.ingredientes.nombres.map(lista_sabores =>
                <div className="lista">
                    <div className="bacon">
                        <span className="ingredientes">{lista_sabores}</span> 
                        <Link to="/pedido"> <img onClick={()=>quitar_al_precio(lista_sabores, pizza)} className="icono-ingredientes" src={add} alt=""/> </Link>
                        <Link to="/pedido"> <img onClick={()=>agregar_al_precio(lista_sabores, pizza)} className="icono-ingredientes" src={add} alt=""/> </Link>
                    </div>  
                </div>)
            cerrar_todo = <Link to="/pedido" className="boton"> <button className="boton-a" onClick={()=>cerrar_opciones()}> Seguir comprando </button> </Link>
        break;

        case "burger":
            BURGER.lista_sabores = burger.ingredientes.nombres.map(lista_sabores =>
                <div className="lista">
                    <div className="bacon">
                        <span className="ingredientes">{lista_sabores}</span> 
                        <Link to="/pedido"> <img onClick={()=>quitar_al_precio(lista_sabores, burger)} className="icono-ingredientes" src={add} alt=""/> </Link>
                        <Link to="/pedido"> <img onClick={()=>agregar_al_precio(lista_sabores, burger)} className="icono-ingredientes" src={add} alt=""/> </Link>
                    </div>  
                </div>)
            cerrar_todo = <Link to="/pedido" className="boton"> <button className="boton-a" onClick={()=>cerrar_opciones()}> Seguir comprando </button> </Link>
        break;
    }
}

function agregar(comida){
    switch (comida) {
        case "pizza":
            PIZZA.sabores = 
                <div className="sabores">
                    <h1 className="pedido-titulo">Le agregamos algún ingrediente extra?</h1>
                    <div className="elegir">
                        <Link to="/pedido"> <span onClick={()=>expandir_lista(comida)} className="si">Si</span> </Link>
                        <Link to="/pedido"> <span onClick={()=>cerrar_opciones()} className="no">No</span> </Link>
                    </div>
                </div>
        break;
        
        case "burger":
            BURGER.sabores = 
                <div className="sabores">
                    <h1 className="pedido-titulo">Le agregamos algún ingrediente extra?</h1>
                    <div className="elegir">
                        <Link to="/pedido"> <span onClick={()=>expandir_lista(comida)} className="si">Si</span> </Link>
                        <Link to="/pedido"> <span onClick={()=>cerrar_opciones()} className="no">No</span> </Link>
                    </div>
                </div>
        break;
        
    }
}


/* ESTA FUNCION SOLO SIRVE PARA AGREGAR LOS PRODUCTOS AL PRECIO TOTAL*/ 
function agregar_precio_producto(precio_producto){
    precio = precio+precio_producto;
}


function agregarle_sabores(comida, precio){
    producto.nombre = comida; //Agrego al array el producto y lo guardo
    console.log("AA"+producto.nombre);
    // pedido[cantidad_de_productos] = producto;
    agregar_precio_producto(precio);
    switch (comida) {
        case "pizza":
            PIZZA.clase = "pedido-container";
            BURGER.clase = "pedido-ocultar";
            agregar(comida);             
        break;
        case "burger":
            PIZZA.clase = "pedido-ocultar";
            BURGER.clase = "pedido-container";
            agregar(comida);            
        break;
    }
}

function mostrar_pedido(){ 
    Swal.fire({
        title: 'Confirmar compra',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `Si`,
        denyButtonText: `No`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            // enivar mensaje aca
            Swal.fire('Pedido enviado con exito', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    })
    while(cantidad_de_productos > 0){
        console.log('pedido'+ cantidad_de_productos + " " + pedido[cantidad_de_productos]);
        console.log('ingredientes: ' + pedido_con_ingredientes[cantidad_de_productos]);

        cantidad_de_productos--;
    }
}

export default class Pedido extends React.Component {
    
    render(){
        return(
            <div className="pedido">
                <div className={PIZZA.clase}>
                    <div className="pedido-mini-container">
                        <img className="pedido-imagen" src={pizza.img} alt=""/>
                        <Link to="/pedido"><img onClick={()=>agregarle_sabores(pizza.nombre, pizza.precio)} className="pedido-icono" src={add} alt=""/></Link>
                    </div>
                    {PIZZA.sabores}
                    {PIZZA.lista_sabores}
                    {PIZZA.frase}
                    {PIZZA.lista_de_compras}
                    {cerrar_todo}
                </div>                

                <div className={BURGER.clase}>
                    <div className="pedido-mini-container">
                        <img className="pedido-imagen" src={burger.img} alt=""/>
                        <Link to="pedido"><img onClick={()=>agregarle_sabores(burger.nombre, burger.precio)} className="pedido-icono" src={add} alt=""/></Link>
                    </div>
                    {BURGER.sabores}
                    {BURGER.lista_sabores}
                    {BURGER.frase}
                    {BURGER.lista_de_compras}
                    {cerrar_todo}
                </div>              
                

                <div className="precio">
                    <h1>Total: ${precio}</h1>
                </div> 

                <Link className="boton" to="/pedido" onClick={()=>mostrar_pedido()}> <button className="boton-a" >Enviar pedido</button></Link>

            </div>
        );
    }
}