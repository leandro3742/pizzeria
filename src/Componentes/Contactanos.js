import React from 'react';
import emailjs from 'emailjs-com';
import './Styles/Contactanos.css';
import swal from 'sweetalert';

// emailjs.send(serviceID, templateID, e.target, userID);
let vehiculo = "Ford";
export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_3hvrpn7', 'template_8fdxbhh', e.target, 'user_aVcs1Bw08xidonpvb7rrl')
      .then((result) => {
        swal({
            title : "El mensaje fue enviado con exito" ,
            buttons: "Cerrar",
            icon : "success"
        }) 
      }, (error) => {
        swal({
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
      <div className="titulo-contactanos">
        <span> Envianos tu consulta </span>
      </div>
      <form className="formulario" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        
        <div className="container-form nombre">
        <label className="etiquetas primera">Nombre</label>
        <input className="cuadros" type="text" name="nombre_cliente" />
        </div>
        
        <div className="container-form numero">
          <label className="etiquetas">Numero de contacto</label>
          <input className="cuadros" type="number" name="numero_cliente" />
        </div>
        
        <div className="container-form descripcion">
          <label className="etiquetas">Descripción</label>
          <textarea className="descripcion" type="text" name="mensaje"  />
        </div>
        
        <input className="submit" type="submit" value="Enviar consulta" />
      </form>
    </div>
  );
}