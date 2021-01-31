import React from 'react';

import NavBar from './Menu/Navbar';
import Footer from './Footer';
import './Styles/layout.css';
function Layout(props) {

  return (
    <div className="layo">
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;