import React from 'react';
import emailjs from 'emailjs-com';
import './Styles/Contactanos.css';
import Swal from 'sweetalert2';

// emailjs.send(serviceID, templateID, e.target, userID);

export default function ContactUs(props) {
  console.log('props:'+ props.ingredientes);
  console.log('precio:' + props.precio);
  console.log('mesa: '+ props.mesa);
    
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_3hvrpn7', 'template_48gqdhi', e.target, 'user_aVcs1Bw08xidonpvb7rrl')
      .then((result) => {
        Swal.fire({
            title : "El mensaje fue enviado con exito" ,
            buttons: "Cerrar",
            icon : "success"
        }) 
      }, (error) => {
        Swal.fire({
            title : "Ops..." ,
            text : "Algo salio mal, intentalalo de nuevo" ,
            buttons: "Cerrar",
            icon : "error"
        }) 
          console.log(error.text);
      });
  }

  return (
    <div>
      <form className="container-boton" onSubmit={sendEmail}>
        <input type="hidden" name="mesa" value={props.mesa}/>
        <input type="hidden" name="pedido" value={props.ingredientes}/>
        <input type="hidden" name="precio" value={props.precio}/>
        
        <div className="contenedor-boton">
          <input className="boton-a" type="submit" value="Enviar pedido" />
        </div>
      </form>
    </div>
  );
}