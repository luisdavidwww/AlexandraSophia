import React from 'react';

import Muchacha from "../images/Recurso-6.png";
//Estilos diseño
import './Home.css';
import './CuentaRegresiva.css';


const Lugar = () => {
  return (
    <>
        <div className='containerImg'>
            <img src={Muchacha} className='imgAbsolute' alt="" />
        </div>
        <div className='Lugar-container'>

                  <div className='title-Conutdown' style={{marginTop:'5rem'}}> Av. Lara con Av. Francia, <br /> Barquisimeto. </div>
                  
                <div className='us-text'>
                    <a href='https://maps.app.goo.gl/W8vtAhKsb9moCqow9' style={{textDecoration:'none'}}>
                      <button className='btn-outline-one'
                          >Ver Ubicación
                      </button>
                    </a>
                </div>
        </div>  
    </>
  )
}

export default Lugar;