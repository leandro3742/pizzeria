import React from 'react';
import './Styles/Banner.css';
import madera from '../Imagenes/madera.jpg';
import pizza from '../Imagenes/pizza.jpg';
import burger from '../Imagenes/hamburguesa.jpg';
import pasta from '../Imagenes/pasta.jpg';
import postre from '../Imagenes/postre.jpg';

let clase_pizza = "mini-container-elegido";
let clase_burger = "mini-container";
let clase_pasta = "mini-container";
let clase_postre = "mini-container";

function cambiar_clase(elegido){
    switch (elegido) {
        case "pizza":
            clase_pizza = "mini-container-elegido";
            clase_burger = "mini-container";
            clase_pasta = "mini-container";
            clase_postre = "mini-container";
        break;
        case "burger":
            clase_pizza = "mini-container";
            clase_burger = "mini-container-elegido";
            clase_pasta = "mini-container";
            clase_postre = "mini-container";
        break;
        case "pasta":
            clase_pizza = "mini-container";
            clase_burger = "mini-container";
            clase_pasta = "mini-container-elegido";
            clase_postre = "mini-container";
        break;
        case "postre":
            clase_pizza = "mini-container";
            clase_burger = "mini-container";
            clase_pasta = "mini-container";
            clase_postre = "mini-container-elegido";
        break;
    }
}
export default class Banner extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
        imagen: pizza,
        }
    }
    
    elegir_pizza = ()=>{
        this.setState({imagen: pizza});
        cambiar_clase("pizza");
    };
    
    elegir_burger = ()=>{
        this.setState({imagen: burger});
        cambiar_clase("burger");
    };
    
    elegir_pasta = ()=>{
        this.setState({imagen: pasta});
        cambiar_clase("pasta");
    };
    
    elegir_postre = ()=>{ 
        this.setState({imagen: postre});
        cambiar_clase("postre");
    };

    render(){
        return(
            <div className="banner">
            
                <img className="superponer madera" src={madera}/>
                <div className="superponer arriba">
                    <img className="imagen" src={this.state.imagen} alt=""/>
                    
                    <div className="contenedores">
                        <div onClick={this.elegir_pizza}className={clase_pizza}> <span className="banner-texto">Pizza</span> </div>
                        
                        <div onClick={this.elegir_burger} className={clase_burger}> <span className="banner-texto">Burger</span> </div>
                        
                        <div onClick={this.elegir_pasta} className={clase_pasta}> <span className="banner-texto">Pasta</span> </div>

                        <div onClick={this.elegir_postre} className={clase_postre}> <span className="banner-texto">Postre</span> </div>
                    </div>
                
                </div>
            </div>
        );
    }
}