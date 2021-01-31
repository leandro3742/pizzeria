import React from 'react';
import { Link } from 'react-router-dom'; 
import './Styles/Home.css';
import local from '../Imagenes/restaurante.jpg';
import Banner from '../Componentes/Banner';

export default class Home extends React.Component {
    render(){
        return(
            <div className="home">
                <Banner />
                <div className="info">
                    <span className="home-titulo"><br/>Quienes somos? <br/><br/> </span>
                    <span className="home-texto">
                        Somos un restaurante con más de 20 años en el rubro
                        trabajando con los mejores productos y con un personal
                        muy calificado <br/> <br/><br/>
                    </span>

                    <span className="home-titulo">Nuestra mision <br/> <br/></span>
                    <span className="home-texto">
                        - Ser la empresa lider en restaurantes en nuestra ciudad <br/>
                        - Apoyar a nuestra comunidad para que siga creciendo 
                    </span>

                    <span className="home-titulo"><br/><br/> Donde nos encontramos? </span>
                    <img className="restaurante" src={local} alt=""/>
                    <span className="home-texto"><br/>33 esq. Carlos Gardel</span>

                </div>
            </div>
        );
    }
}