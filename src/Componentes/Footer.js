import React from 'react';
import './Styles/Footer.css';
import facebook from '../Imagenes/iconos/facebook.svg';
import instagram from '../Imagenes/iconos/instagrm.png';
import wpp from '../Imagenes/iconos/whatsapp.svg';
import telefono from '../Imagenes/iconos/telefono.png';

export default class Footer extends React.Component {
    render(){
        return(
        <div className="Footer">
           <div className="contactos">
                <span className="titulo">Contactanos</span>
                <div className="tel">
                    <img className="icono" src={telefono} alt=""/> 
                    <span className="texto">4330 1122</span>   
                </div>
                <a href="https://api.whatsapp.com/send?phone=59898361013" className="wpp">
                    <img className="icono" src={wpp} alt=""/>
                    <span className="texto">098361013</span>
                </a>   
            </div>

            <div className="redes">
                <span className="titulo">Seguínos en nuestras redes</span>
                <div className="facebook">
                    <img className="icono" src={facebook} alt=""/>
                    <span className="texto">LM Designer</span>
                </div>
                <div className="instagram">
                    <img className="icono" src={instagram} alt=""/>
                    <span className="texto">LM.designer</span>   
                </div>            
            </div>

        </div>
        
        );
    }
}

