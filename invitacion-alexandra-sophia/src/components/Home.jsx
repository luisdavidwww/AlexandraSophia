import React from 'react';

//componentes
import Navbar from '../components/Navbar';
import Invitado from '../components/Invitado';
import Fecha from '../components/Fecha';
import CuentaRegresiva from '../components/CuentaRegresiva';
import Lugar from '../components/Lugar';
import Confirma from '../components/Confirma';
import EndLogo from '../components/EndLogo';

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

          <div>
            <Lugar />  
          </div>   

          <div>
            <Confirma />  
          </div>     
          <div>
           <EndLogo />
          </div>  

    </>
  )
}

export default Home