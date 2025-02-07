import React from 'react';

//componentes
import Navbar from '../components/Navbar';
import Invitado from '../components/Invitado';
import Fecha from '../components/Fecha';
import CuentaRegresiva from '../components/CuentaRegresiva';

//Estilos diseño
import './Home.css';

const Home = () => {
  return (
    <>
      <Navbar />
        <div className='header-container'></div>  

          <div>
            <Invitado />
          </div> 

          <div>
            <Fecha />
          </div>   

          <div>
            <CuentaRegresiva />  
          </div>      

    </>
  )
}

export default Home