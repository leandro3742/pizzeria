import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Burger from './Burger';
import logo from '../../Imagenes/iconos/logo-pizza.png';

const Nav = styled.nav`
  background-color: rgba(255, 251, 251, 0.3);
  margin: 0; 
  width: 100%;
  display: grid;
  justify-content: center;
  .logo {
    padding: 0;
    margin-top: 0;
    width: 224px;
    height: 113px;
  }
  @media only screen and (min-width: 781px){
    height: 125px;
    .logo{
      width: 200px;
      height: 150px;
    }
  }
`

const Navbar = () => {
  return (
    <Nav>  
      <Link to="/"><img src={logo} alt="" className="logo"/></Link>
      <Burger />
    </Nav>
  )
}

export default Navbar; 