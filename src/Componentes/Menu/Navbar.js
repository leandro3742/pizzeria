import React from 'react';
import { Link } from 'react-router-dom';
import Burger from './Burger';
import logo from '../../Imagenes/iconos/logo-pizza.png';
import './styles/Navbar.css';
// const Nav = styled.nav`
//   background-color: rgba(255, 251, 251, 0.3);
//   margin: 0; 
//   width: 100%;
//   display: grid;
//   justify-content: center;
//   .logo {
//     padding: 0;
//     margin-top: 0;
//     width: 224px;
//     height: 113px;
//   }
//   @media only screen and (min-width: 781px){
//     height: 125px;
//     .logo{
//       width: 200px;
//       height: 150px;
//     }
//   }
// `

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-center">
    <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    {/* <div className="row"> */}
      <div class="collapse navbar-collapse bg-light rounded" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/pedido">Pedido</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/menu">Menu</Link>
          </li>
        </ul>
      </div>
    {/* </div> */}
  </nav>
  )
}

export default Navbar; 